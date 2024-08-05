const minicssExtPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  entry: "./src/app.js",
  plugins: [
    new minicssExtPlugin({
      filename: "main.css",
    }),
  ],
  output: {
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: [minicssExtPlugin.loader, "css-loader", "postcss-loader"],
      },
    ],
  },
};
