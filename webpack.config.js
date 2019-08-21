const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: require.resolve("./src/print.js"),
        use: "imports-loader?this=>window"
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      join: ["lodash", "join"]
    })
  ]
};
