var path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "webpack-numbers.js",
    library: "webpackNumbers",
    libraryTarget: "umd"
  },
  externals: [
    {
      lodash: {
        commonjs: "lodash", // 可以将 library 作为一个 CommonJS 模块访问。
        commonjs2: "lodash", // 和上面的类似，但导出的是 module.exports.default.
        amd: "lodash", // 类似于 commonjs，但使用 AMD 模块系统。
        root: "_" // 可以通过一个全局变量访问 library（例如，通过 script 标签）。
      }
    },
    /**
     * 对于 有多个入口的 library，需要逐个或者使用正则表达式 排除它们
     * import A from 'library/one';
     * import B from 'library/two';
     */
    "library/one",
    "library/two",
    // 匹配以 "library/" 开始的所有依赖
    /^library\/.+$/
  ]
};
