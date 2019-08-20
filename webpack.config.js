const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
// const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    another: "./src/another-module.js"
  },
  devtool: "inline-source-map",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "管理输出"
    }),
    new ManifestPlugin()

    // new webpack.HotModuleReplacementPlugin()
  ]
};
