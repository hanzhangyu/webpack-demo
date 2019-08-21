const path = require("path");

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
      extensions: [".tsx", ".ts", ".js"]
    },
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist")
    }
  };
};
