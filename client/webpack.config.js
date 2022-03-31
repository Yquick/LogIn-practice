const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  name: 'Login-practice',
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }]
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'public/index.html',
  })],

  devServer: {
    host: 'localhost',
    port: 9000,
    open: true, // open page when start
  },
}