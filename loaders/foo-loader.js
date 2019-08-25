/**
 * @file 在每个模块头部添加 dep 文件的内容
 * 自定义的loader，不会被 watch 监听，即修改loader需要重启 编译
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
  const callback = this.async();

  const options = getOptions(this);
  validateOptions(schema, options, "Example Loader");

  const depPath = path.resolve(__dirname, "dep.js");
  this.addDependency(depPath); // 外部资源必须声明，使缓存 loaders 无效，以及 添加 watch

  fs.readFile(depPath, "utf-8", function(err, header) {
    if (err) return callback(err);
    console.log('emit');

    callback(null, header + "\n" + source); // 补上一段代码在文件开头，在 sourceMap 中为 entry 文件的 第一行
  });
};