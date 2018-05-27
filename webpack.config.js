var path = require("path");
module.exports = {
  entry: [
    "bootstrap/dist/css/bootstrap.css",
    "babel-polyfill",
    "./src/index.js"
  ],
  mode: "development",
  output: {
    filename: "bundle.js",
    publicPath: "/assets"
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
};
