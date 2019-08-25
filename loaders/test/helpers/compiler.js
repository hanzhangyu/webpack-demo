import path from "path";
import webpack from "webpack";
import memoryfs from "memory-fs";

const loaderRoot = path.resolve(__dirname, "../../");
const fixtureRoot = path.resolve(__dirname, "../fixtures");

export default (fixture, options = {}) => {
  const compiler = webpack({
    context: __dirname,
    entry: path.resolve(fixtureRoot, fixture),
    output: {
      path: path.resolve(__dirname),
      filename: "bundle.js"
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: {
            loader: path.resolve(loaderRoot, "foo-loader.js"),
            options: {
              test: "..."
            }
          }
        }
      ]
    }
  });

  compiler.outputFileSystem = new memoryfs();

  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      stats.hasErrors() && console.log(stats.toString());
      if (err || stats.hasErrors()) reject(err);

      resolve(stats);
    });
  });
};
