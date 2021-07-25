// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// const ansiRegex = require("ansi-regex");
const path = require("path");

module.exports = {
  publicPath: "/cli4-test",
  //   transpileDependencies: [ansiRegex],
  configureWebpack: {
    entry: "./src/main.js",
    output: {
      path: path.resolve(__dirname, "./dist"),
      filename: "[name].[hash].bundle.js",
    },
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
    resolve: {
      alias: {
        "@": path.join(__dirname, "src/"),
      },
      extensions: ["*", ".js", ".vue", ".json"],
    },
    devtool: "inline-source-map",
    // plugins: [new HtmlWebpackPlugin() /*, new MiniCssExtractPlugin()*/],
  },
};
