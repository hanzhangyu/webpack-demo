/**
 * 自定义的loader，不会被 watch 监听
 * @type {module:path}
 */
const path = require("path");
const fs = require("fs");
const { getOptions } = require("loader-utils");
const validateOptions = require("schema-utils");

const schema = {
  type: "object",
  properties: {
    test: {
      type: "string"
    }
  }
};

module.exports = function(source) {
  console.log(source);

  const callback = this.async();
  // const resolve = promisify(this.resolve); // 对于一些动态引入的，比如 less 中的 url，该值可能定义在其他 less 文件，无法简单的变为 require 表达式，则需要使用该函数

  const options = getOptions(this);
  validateOptions(schema, options, "Example Loader");

  const depPath = path.resolve(__dirname, "dep.js");
  this.addDependency(depPath); // 外部资源必须声明，使缓存 loaders 无效，以及 添加 watch

  fs.readFile(depPath, "utf-8", function(err, header) {
    if (err) return callback(err);

    source = parsePhRequire(source);

    callback(null, header + "\n" + source); // 补上一段代码在文件开头，在 sourceMap 中为 entry 文件的 第一行
  });
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

      const runDefault = JSON.parse(groups.runDefault);
      const postfix = runDefault ? ".default()" : "";

      return groups.reqAry
        .split(",")
        .map(path => `require(${path})${postfix}`)
        .join("\n");
    }
  );
}

// console.log(parsePhRequire(`ph_require(["b.js", "a.js"], true);`)); // require(b.js).default() \n require(a.js).default();
