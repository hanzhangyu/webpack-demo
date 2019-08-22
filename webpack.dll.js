const path = require("path");
const webpack = require("webpack");

module.exports = {
    context: __dirname,
    entry: ["./custom-module"],
    output: {
        filename: "vendor.[hash].js",
        path: path.resolve(__dirname, "dist"),
        library: "vendor_lib_[hash]"
    },
    plugins: [
        new webpack.DllPlugin({
            name: "vendor_lib_[hash]",
            path: path.resolve(__dirname, "dist/vendor-manifest.json")
        })
    ]
};