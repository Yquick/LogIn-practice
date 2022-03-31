const path = require('path')

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
      loader: 'babel-loader',
    }]
  }
}