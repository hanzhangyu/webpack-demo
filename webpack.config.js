const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
// const webpack = require("webpack");

module.exports = {
  mode: "production",
  entry: {
    app: "./src/index.js"
  },
  devtool: "inline-source-map",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: [
          filepath => {
            console.log(
              filepath,
              /\.vue\.jsx?$/.test(filepath) ||
                /node_modules\/@paulhan/.test(filepath)
            );
            // always transpile js in vue files
            if (/\.vue\.jsx?$/.test(filepath)) {
              return false;
            }
            // check if this is something the user explicitly wants to transpile
            if (/node_modules\/@paulhan/.test(filepath)) {
              return false;
            }
            // Don't transpile node_modules
            return /node_modules/.test(filepath);
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      }
    ]
  },
  optimization: {
    minimize: false,
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]vue/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Vue测试",
      template: "src/index.html"
    }),
    new ManifestPlugin(),
    new VueLoaderPlugin()
    // new webpack.HotModuleReplacementPlugin()
  ]
};
