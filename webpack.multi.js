module.exports = [
  {
    mode: "development",
    entry: "./src/print.js",
    output: {
      filename: "print.[contenthash].js"
    },
  },
  {
    mode: "development",
    entry: "./src/math.js",
    output: {
      filename: "math.[contenthash].js"
    },
  }
];
