const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    context: __dirname,
    entry: ["./custom-module"],
    output: {
        filename: "dll.[hash].js",
        sourceMapFilename: "[name].map",
        path: path.resolve(__dirname, "dist"),
        library: "dll_lib_[hash]"
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DllPlugin({
            name: "dll_lib_[hash]",
            path: path.resolve(__dirname, "dist/dll-manifest.json")
        })
    ]
};