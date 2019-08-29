var path = require("path");
var _ = require("lodash");

const emitCountMap = new Map();

function ManifestPlugin(opts) {
  debugger;
  this.opts = _.assign(
    {
      publicPath: null,
      basePath: "",
      fileName: "manifest.json",
      transformExtensions: /^(gz|map)$/i,
      writeToFileEmit: false,
      seed: null,
      filter: null,
      map: null,
      generate: null,
      sort: null,
      serialize: function(manifest) {
        return JSON.stringify(manifest, null, 2);
      }
    },
    opts || {}
  );
}

ManifestPlugin.prototype.getFileType = function(str) {
  str = str.replace(/\?.*/, "");
  var split = str.split(".");
  var ext = split.pop();
  if (this.opts.transformExtensions.test(ext)) {
    ext = split.pop() + "." + ext;
  }
  return ext;
};

ManifestPlugin.prototype.apply = function(compiler) {
  debugger;
  var moduleAssets = {};

  var outputFolder = compiler.options.output.path;
  var outputFile = path.resolve(outputFolder, this.opts.fileName);
  var outputName = path.relative(outputFolder, outputFile);

  // region 记录资源名， TODO 如何触发？ 检查 test
  var moduleAsset = function(module, file) {
    if (module.userRequest) {
      moduleAssets[file] = path.join(
        path.dirname(file),
        path.basename(module.userRequest)
      );
    }
  };
  // endregion

  // region 最后一个 emit 文件的钩子
  var emit = function(compilation, compileCallback) {
    const emitCount = emitCountMap.get(outputFile) - 1;
    emitCountMap.set(outputFile, emitCount); // TODO 为什么需要 beforeRun 钩子？

    var seed = this.opts.seed || {};

    var publicPath =
      this.opts.publicPath != null
        ? this.opts.publicPath
        : compilation.options.output.publicPath;
    var stats = compilation.getStats().toJson();

    // region 获取 output 文件
    var files = compilation.chunks.reduce(
      function(files, chunk) {
        return chunk.files.reduce(
          function(files, path) {
            var name = chunk.name ? chunk.name : null;

            if (name) {
              name = name + "." + this.getFileType(path);
            } else {
              // For nameless chunks, just map the files directly.
              name = path;
            }

            // Webpack 4: .isOnlyInitial()
            // Webpack 3: .isInitial()
            // Webpack 1/2: .initial
            return files.concat({
              path: path,
              chunk: chunk,
              name: name,
              isInitial: chunk.isOnlyInitial
                ? chunk.isOnlyInitial()
                : chunk.isInitial
                ? chunk.isInitial()
                : chunk.initial,
              isChunk: true,
              isAsset: false,
              isModuleAsset: false
            });
          }.bind(this),
          files
        );
      }.bind(this),
      []
    );
    // endregion

    // region 获取 plugin 向 compilation.assets 添加的 assets
    // module assets don't show up in assetsByChunkName.
    // we're getting them this way;
    files = stats.assets.reduce(function(files, asset) {
      var name = moduleAssets[asset.name];
      if (name) {
        return files.concat({
          path: asset.name,
          name: name,
          isInitial: false,
          isChunk: false,
          isAsset: true,
          isModuleAsset: true
        });
      }

      // 过滤 output file
      var isEntryAsset = asset.chunks.length > 0;
      if (isEntryAsset) {
        return files;
      }

      return files.concat({
        path: asset.name,
        name: asset.name,
        isInitial: false,
        isChunk: false,
        isAsset: true,
        isModuleAsset: false
      });
    }, files);

    debugger;
    // region 过滤 hot updates 与 manifest
    files = files.filter(function(file) {
      // Don't add hot updates to manifest
      var isUpdateChunk = file.path.indexOf("hot-update") >= 0;
      // Don't add manifest from another instance
      var isManifest =
        emitCountMap.get(path.join(outputFolder, file.name)) !== undefined;

      return !isUpdateChunk && !isManifest;
    });
    // endregion

    // region 使用用户的选项调整最后的输出，并生成文件
    // Append optional basepath onto all references.
    // This allows output path to be reflected in the manifest.
    if (this.opts.basePath) {
      files = files.map(
        function(file) {
          file.name = this.opts.basePath + file.name;
          return file;
        }.bind(this)
      );
    }

    if (publicPath) {
      // Similar to basePath but only affects the value (similar to how
      // output.publicPath turns require('foo/bar') into '/public/foo/bar', see
      // https://github.com/webpack/docs/wiki/configuration#outputpublicpath
      files = files.map(
        function(file) {
          file.path = publicPath + file.path;
          return file;
        }.bind(this)
      );
    }

    files = files.map(file => {
      file.name = file.name.replace(/\\/g, "/");
      file.path = file.path.replace(/\\/g, "/");
      return file;
    });

    if (this.opts.filter) {
      files = files.filter(this.opts.filter);
    }

    if (this.opts.map) {
      files = files.map(this.opts.map);
    }

    if (this.opts.sort) {
      files = files.sort(this.opts.sort);
    }

    var manifest;
    if (this.opts.generate) {
      manifest = this.opts.generate(seed, files);
    } else {
      manifest = files.reduce(function(manifest, file) {
        manifest[file.name] = file.path;
        return manifest;
      }, seed);
    }

    const isLastEmit = emitCount === 0;
    if (isLastEmit) {
      var output = this.opts.serialize(manifest);

      compilation.assets[outputName] = {
        source: function() {
          return output;
        },
        size: function() {
          return output.length;
        }
      };

      if (this.opts.writeToFileEmit) {
        fs.writeFileSync(outputFile, output);
      }
    }
    // endregion

    // 触发自定义的钩子函数
    if (compiler.hooks) {
      compiler.hooks.webpackManifestPluginAfterEmit.call(manifest);
    } else {
      compilation.applyPluginsAsync(
        "webpack-manifest-plugin-after-emit",
        manifest,
        compileCallback
      );
    }
  }.bind(this);
  // endregion

  // region TODO 怎么会有多次启动来生成共一个文件，multi-entry 也只有一次啊？
  function beforeRun(compiler, callback) {
    let emitCount = emitCountMap.get(outputFile) || 0;
    emitCountMap.set(outputFile, emitCount + 1);

    if (callback) {
      callback();
    }
  }
  // endregion

  if (compiler.hooks) {
    const SyncWaterfallHook = require("tapable").SyncWaterfallHook;
    const pluginOptions = {
      name: "ManifestPlugin",
      stage: Infinity // 保证 manifest 总在最后生成
    };
    compiler.hooks.webpackManifestPluginAfterEmit = new SyncWaterfallHook([
      "manifest"
    ]); // 添加自定义的钩子函数，让外部使用

    compiler.hooks.compilation.tap(pluginOptions, function(compilation) {
      compilation.hooks.moduleAsset.tap(pluginOptions, moduleAsset); // 一个模块中的一个资源被添加到编译中
    });
    compiler.hooks.emit.tap(pluginOptions, emit);

    compiler.hooks.run.tap(pluginOptions, beforeRun); // TODO run / beforeRun / watchRun
    compiler.hooks.watchRun.tap(pluginOptions, beforeRun);
  } else {
    compiler.plugin("compilation", function(compilation) {
      compilation.plugin("module-asset", moduleAsset);
    });
    compiler.plugin("emit", emit);

    compiler.plugin("before-run", beforeRun);
    compiler.plugin("watch-run", beforeRun);
  }
};

module.exports = ManifestPlugin;
