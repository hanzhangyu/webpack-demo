/**
 * 将解析到的 自定义 require 直接 写入 文件
 */
const path = require("path");
const fs = require("fs");
const { promisify } = require("util");

module.exports = function(source) {
  console.log(source);

  this.async();

  const depPath = path.resolve(__dirname, "dep.js");
  this.addDependency(depPath); // 外部资源必须声明，使缓存 loaders 无效，以及 添加 watch

  dynamicParsePhRequire(this, source);
};

/**
 * 将 ph_require 的内容，写入源文件
 * @param ctx
 * @param source
 * @returns {Promise<void>}
 */
async function dynamicParsePhRequire(ctx, source) {
  const reqRE = /ph_require\(\[(?<reqAry>[\w\d\s.",/]+)](,(?<runDefault>.*))?\);?/g;
  const resolve = promisify(ctx.resolve); // 对于一些动态引入的，比如 less 中的 url，该值可能定义在其他 less 文件，无法简单的变为 require 表达式，则需要使用该函数
  const loadModule = promisify(ctx.loadModule);
  let js = source;
  let match;
  debugger;
  while ((match = reqRE.exec(source))) {
    const reqs = match.groups.reqAry.split(",");
    const data = await Promise.all(
      reqs.map(async path => {
        const filename = await resolve(ctx.context, JSON.parse(path));
        return loadModule(
          [require.resolve("./stringify-loader.js"), filename].join("!") // 这里其实没有必要，less-loader 是因为 url 里面的可以为任何东西，把它包裹一次 " 变为js字符串，绕过 loadModule 报错 non-JS modules
        ).then(JSON.parse); // 然后在使用 parse 复原即可
      })
    );
    // console.log("data", data);
    js =
      js.slice(0, match.index) +
      data.join("\n") +
      js.slice(match.index + match[0].length, js.length);
    // console.log("js", js);
  }
  ctx.callback(null, js, null);
}
