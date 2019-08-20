const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
// const webpack = require("webpack");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js"
  },
  devtool: "inline-source-map",
  output: {
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].bundle.js', // 决定 non-entry chunk(非入口 chunk) 的名称
    path: path.resolve(__dirname, "dist"),
    publicPath: "./"
  },
  optimization: {
    runtimeChunk: "single"
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Caching"
    }),
    new ManifestPlugin()
    // new BundleAnalyzerPlugin()

    // new webpack.HotModuleReplacementPlugin()
  ]
};
