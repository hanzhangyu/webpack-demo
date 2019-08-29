import { Compiler } from "webpack";

class FileListPlugin {
  apply(compiler: Compiler) {
    compiler.hooks.emit.tap("FileListPlugin", compilation => {
      let fileList = "In this build:\n\n";

      // debugger;
      // 遍历所有编译过的资源文件，可以看到 manifest 不在此列，因为其设置了一个最大的stage
      Object.keys(compilation.assets)
        .sort()
        .forEach(filename => {
          fileList += `- ${filename}\n`;
        });

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
      console.log(
        "【afterEmit 获取资源列表】",
        Object.keys(compilation.assets)
      );
    });
    // compiler.hooks.webpackManifestPluginAfterEmit.tap("FileListPlugin", manifest => {
    //   console.log("【webpackManifestPluginAfterEmit】", manifest);
    // })
  }
}

export default FileListPlugin;
