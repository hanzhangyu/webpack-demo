import { Compiler } from "webpack";

class WatchChunkPlugin {
  private chunkVersions: { [key in string]: string };
  constructor() {
    this.chunkVersions = {};
  }
  apply(compiler: Compiler) {
    compiler.hooks.emit.tapAsync("WatchChunkPlugin", (compilation, callback) =>   {
      var changedChunks = compilation.chunks.filter(chunk => {
        var oldVersion = this.chunkVersions[chunk.name];
        this.chunkVersions[chunk.name] = chunk.hash;
        return chunk.hash !== oldVersion;
      });

      console.log("【changedChunks】", changedChunks.map(chunk => chunk.id));
      callback();
    });
  }
}

export default WatchChunkPlugin;
