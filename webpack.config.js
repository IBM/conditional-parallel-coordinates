const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
      cpc: './dist/src/index.js',
      demo: './dist/demo/src/main.js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      },
        {
        test: /\.html$/,
        loader: "html-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: ['style-loader', "css-loader"],
        exclude: /node_modules/
      }
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
      contentBase: path.join(__dirname, 'demo'),
      compress: true,
      port: 8080
  },
  plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'demo/index.html')
      }),
    ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    }
};
