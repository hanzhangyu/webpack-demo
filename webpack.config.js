const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
// const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js"
  },
  devtool: "inline-source-map",
  output: {
    filename: "[name].bundle.js",
    chunkFilename: '[name].bundle.js', // 决定 non-entry chunk(非入口 chunk) 的名称
    path: path.resolve(__dirname, "dist"),
    publicPath: "./"
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
