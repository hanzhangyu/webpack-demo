/**
 * @file 测试一下 compilation 结构，webpack 的 type 文件 内容缺失太严重了，学完补上一波
 * fileDependencies 如下：
 * 1. 对于chunk 为 index时，可以看到当前 chunk 的依赖包含：（注意到，这里 lodash 被提取了，不算 dep）
 *    1. entry
 *    2. loaders
 *    3. 直接 require 的文件 如 customSyntax.js
 *    4. 被 loader 引入的，并且 addDependency 的文件
 * 2. vendor
 *    1. lodash
 *    2. webpack/buildin/global.js 获取 global
 *    2. webpack/buildin/module.js 将 lodash 函数变为 module
 * 3. runtime
 */
import { Compiler } from "webpack";

class WalkFilePlugin {
  apply(compiler: Compiler) {
    // debugger;
    compiler.hooks.emit.tap("WalkFilePlugin", compilation => {
      // region 获取 file dependencies
      // 检索每个（构建输出的）chunk：
      console.log();
      // any[] ...
      compilation.chunks.forEach(chunk => {
        console.log("【CHUNK】", chunk.name); // index. runtime, vendors~index
        // 检索 chunk 中（内置输入的）的每个模块：
        chunk._modules.forEach((module: any) => {
          console.log("【MODULE】", module.id);
          // 检索模块中包含的每个源文件路径：
          module.buildInfo.fileDependencies.forEach((filepath: string) => {
            // 我们现在已经对源结构有不少了解……
            console.log("【fileDependencies】", filepath);
          });
        });

        // region 获取源码
        // 检索由 chunk 生成的每个资源(asset)文件名：
        chunk.files.forEach((filename: string) => {
          // 获取所有产生的文件名
          // Get the asset source for each file generated by the chunk: 产生的文件文件内容
          var source = compilation.assets[filename].source();
        });
        // endregion
      });
      // endregion
    });
  }
}

export default WalkFilePlugin;
