const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const webpack = require("webpack");

module.exports = env => {
  // Use env.<YOUR VARIABLE> here: 这里我们并没有使用
  console.log("NODE_ENV: ", env.NODE_ENV); // 'local'
  console.log("Production: ", env.production); // true

  return {
    mode: "development",
    entry: "./src/index.ts",
    devtool: "inline-source-map", // 告诉 webpack 提取这些 source map，并内联到最终的 bundle 中。
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
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
      path: path.resolve(__dirname, "dist")
    },
    optimization: {
      splitChunks: {
        // include all types of chunks
        chunks: 'all'
      }
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "管理输出",
        templateParameters: {
          'dll_hash':/[^_]+$/.exec(require("./dist/dll-manifest.json").name)[0] // TODO 寻找一个更加优雅的方式引入 dll
        },
        template: "./template.html"
      }),
      new webpack.DllReferencePlugin({
        context: ".",
        manifest: require("./dist/dll-manifest.json")
      }),
      new ManifestPlugin()
    ]
  };
};
