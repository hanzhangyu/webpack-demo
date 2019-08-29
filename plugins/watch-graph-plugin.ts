/**
 * @file 通过 compilation.fileTimestamps 所扫描目录下每一个文件的最后修改时间
 *
 */
import { Compiler } from "webpack";

class WatchGraphPlugin {
  private startTime: number;
  private prevTimestamps: Map<string, number>;

  constructor() {
    this.startTime = Date.now();
    this.prevTimestamps = new Map();
  }
  apply(compiler: Compiler) {
    debugger;
    compiler.hooks.emit.tap("WatchGraphPlugin", compilation => {
      var changedFiles = Array.from(compilation.fileTimestamps.keys()).filter(
        watchfile => {
          // 检查文件路径 对应的 ts，查看文件是否被更新
          return (
            (this.prevTimestamps.get(watchfile) || this.startTime) <
            (compilation.fileTimestamps.get(watchfile) || Infinity)
          );
        }
      );

      console.log("【changedFiles】", changedFiles);

      this.prevTimestamps = compilation.fileTimestamps;
    });
  }
}

export default WatchGraphPlugin;
