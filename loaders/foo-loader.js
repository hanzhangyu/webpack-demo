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

  const options = getOptions(this);
  validateOptions(schema, options, "Example Loader");

  const depPath = path.resolve(__dirname, "dep.js");
  this.addDependency(depPath); // 外部资源必须声明，使缓存 loaders 无效，以及 添加 watch

  fs.readFile(depPath, "utf-8", function(err, header) {
    if (err) return callback(err);
    callback(null, header + "\n" + source); // 补上一段代码在文件开头，在 sourceMap 中为 entry 文件的 第一行
  });
};
