class HelloAsyncPlugin {
  apply(compiler) {
    // 生成资源到 output 目录之前
    compiler.hooks.emit.tapAsync(
      "HelloAsyncPlugin",
      (compilation, callback) => {
        // 做一些异步的事情……
        setTimeout(function() {
          console.log("【ASYNC WORKS】");
          callback();
        }, 1000);
      }
    );
  }
}

module.exports = HelloAsyncPlugin;
