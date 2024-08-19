const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const DotenvWebpack = require("dotenv-webpack");

const mode = process.env.NODE_ENV || "development";

module.exports = {
  mode,
  entry: "./src/app.js", // 엔트리 파일
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // .js 또는 .jsx 파일을 처리
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html", // HTML 템플릿 파일
      filename: "index.html",
    }),
    new DotenvWebpack({
      path: `./.env.${process.env.NODE_ENV || "development"}`,
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx"], // .js와 .jsx 파일을 인식
  },
  devServer: {
    static: path.resolve(__dirname, "dist"), // 정적 파일 제공
    compress: true,
    port: 9000, // 포트 설정 (필요에 따라 변경)
  },
};
