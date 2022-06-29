const path = require("path");
module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "bitstrap/src/web.js"),
  output: {
    path: path.resolve(__dirname, "bitstrap/dist/js"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
