let mode = process.env.NODE_ENV === "production" ? "production" : "development";
console.log("bharath", mode);
module.exports = {
  mode: mode,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  devtool: "source-map",
  devServer: {
    contentBase: "./dist",
  },
};
