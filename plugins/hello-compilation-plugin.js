class HelloCompilationPlugin {
  apply(compiler) {
    // tap(触及) 到 compilation hook，而在 callback 回调时，会将 compilation 对象作为参数，（编译(compilation)创建之后，执行插件）
    compiler.hooks.compilation.tap('HelloCompilationPlugin', compilation => {
      // 现在，通过 compilation 对象，我们可以 tap(触及) 到各种可用的 hooks 了，（优化阶段开始时触发，执行插件）
      compilation.hooks.optimize.tap('HelloCompilationPlugin', () => {
        console.log('【正在优化资源】');
      });
    });
  }
}

module.exports = HelloCompilationPlugin;