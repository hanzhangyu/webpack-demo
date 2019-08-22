const path = require("path");
const webpack = require("webpack");

module.exports = env => {
  // Use env.<YOUR VARIABLE> here: 这里我们并没有使用
  console.log('NODE_ENV: ', env.NODE_ENV); // 'local'
  console.log('Production: ', env.production); // true

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
    plugins: [
      new webpack.DllReferencePlugin({
        context: ".",
        manifest: require("./dist/vendor-manifest.json") // eslint-disable-line
      })
    ]
  };
};
