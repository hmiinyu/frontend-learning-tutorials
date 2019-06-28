const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.vue',
  output: {
    path: __dirname,
    filename: './dist/bundle.js'
  },
  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './inherit_demo.html'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    open: true,
    port: 9000
  }
};