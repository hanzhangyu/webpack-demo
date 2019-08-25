class HelloPromisePlugin {
  apply(compiler) {
    // 生成资源到 output 目录之前
    compiler.hooks.emit.tapPromise("HelloPromisePlugin", compilation => {
      // 返回一个 Promise，在我们的异步任务完成时 resolve……
      console.log("【PROMISE WORKS QUEUED】"); // 可以发现 plugin 和 loader 一样也是 串行的
      return new Promise((resolve, reject) => {
        setTimeout(function() {
          console.log("【PROMISE WORKS】");
          resolve();
        }, 1000);
      });
    });
  }
}

module.exports = HelloPromisePlugin;
