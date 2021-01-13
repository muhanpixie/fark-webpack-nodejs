const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js",
  },
  devServer: {
    port: 8052,
    host: "192.168.0.6",
    contentBase: path.join(__dirname, 'dist')
  }
}