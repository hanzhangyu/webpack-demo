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
    // chunkFilename: '[name].bundle.js', // 决定 non-entry chunk(非入口 chunk) 的名称 // 注释该行，使用同一的名字
    path: path.resolve(__dirname, "dist"),
    publicPath: "./"
  },
  optimization: {
    runtimeChunk: "single",
    splitChunks: { // 将第三方库(library)（例如 lodash 或 react）提取到单独的 vendor chunk 文件中
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
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
