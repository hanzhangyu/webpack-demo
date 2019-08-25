/**
 * @file 添加自定义语法的 require 函数
 */
const path = require("path");
const fs = require("fs");

module.exports = function(source) {
  const depPath = path.resolve(__dirname, "dep.js");
  this.addDependency(depPath); // 外部资源必须声明，使缓存 loaders 无效，以及 添加 watch

  return parsePhRequire(source);
};

/**
 * ph_require(["print.js"], true); -> require("print.js).default();
 * @param source
 */
function parsePhRequire(source) {
  return source.replace(
    /ph_require\(\[(?<reqAry>[\w\d\s.",/]+)](,(?<runDefault>.*))?\)/g,
    function(...argv) {
      const groups = argv[argv.length - 1];

      const runDefault = groups.runDefault && JSON.parse(groups.runDefault);
      const postfix = runDefault ? ".default()" : "";

      return groups.reqAry
        .split(",")
        .map(path => `require(${path})${postfix}`)
        .join("\n");
    }
  );
}

// console.log(parsePhRequire(`ph_require(["b.js", "a.js"], true);`)); // require(b.js).default() \n require(a.js).default();
