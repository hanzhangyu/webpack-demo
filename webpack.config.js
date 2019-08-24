const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const CspHtmlWebpackPlugin = require("csp-html-webpack-plugin");
const webpack = require("webpack");

module.exports = env => {
  // Use env.<YOUR VARIABLE> here: 这里我们并没有使用
  console.log("NODE_ENV: ", env.NODE_ENV); // 'local'
  console.log("Production: ", env.production); // true
  console.log("ASSET_PATH : ", env.ASSET_PATH); // true

  return {
    mode: "development",
    entry: "./src/index.ts",
    devtool: "cheap-module-eval-source-map", // 源码 ts， 无法在语句级别打断点
    // devtool: "cheap-eval-source-map", // loader转换过的代码
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: [
            "cache-loader",
            {
              loader: "ts-loader",
              options: {
                transpileOnly: true // 主进程不进行 type checking，因为 类型检查 需要 rebuild 所有文件
              }
            }
          ],
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                modules: true
              }
            }
          ]
        }
      ]
    },
    resolve: {
      symlinks: false, // 如果不使用 symlinks（npm link），关闭提高 解析速度
      extensions: [".tsx", ".ts", ".js"] // 减少 resolve.modules, resolve.extensions, resolve.mainFiles, resolve.descriptionFiles 中 items 数量，因为他们会增加文件系统调用的次数。
    },
    output: {
      filename: "bundle.js",
      publicPath: env.ASSET_PATH,
      path: path.resolve(__dirname, "dist"),
      pathinfo: false // 输出结果不携带路径信息
    },
    optimization: {
      splitChunks: {
        // include all types of chunks
        chunks: "all"
      }
    },
    plugins: [
      // new ForkTsCheckerWebpackPlugin(), // 在分离的进程中执行 type checking
      new webpack.DefinePlugin({
        "process.env.ASSET_PATH": JSON.stringify(env.ASSET_PATH)
      }),
      new HtmlWebpackPlugin({
        title: "管理输出",
        templateParameters: {
          dll_hash: /[^_]+$/.exec(require("./dist/dll-manifest.json").name)[0] // TODO 寻找一个更加优雅的方式引入 dll
        },
        template: "./template.html"
      }),
      new webpack.DllReferencePlugin({
        context: ".",
        manifest: require("./dist/dll-manifest.json")
      }),
      // new CspHtmlWebpackPlugin(),
      new ManifestPlugin()
    ]
  };
};
