class FileListPlugin {
  apply(compiler) {
    compiler.hooks.emit.tap("FileListPlugin", compilation => {
      let fileList = "In this build:\n\n";

      debugger;
      // 遍历所有编译过的资源文件，可以看到 manifest 不在此列，TODO webpack-manifest-plugin 使用的 require('tapable').SyncWaterfallHook
      for (const filename in compilation.assets) {
        fileList += `- ${filename}\n`;
      }

      // 在 webpack 构建中 添加一个新文件
      compilation.assets["filelist.md"] = {
        source() {
          return fileList;
        },
        size() {
          return fileList.length;
        }
      };
    });
    compiler.hooks.afterEmit.tap("FileListPlugin", compilation => {
      // 等到构建流程退出了，我们就能获取到所有产生的文件
      console.log(Object.keys(compilation.assets));
    });
  }
}

module.exports = FileListPlugin;
