const path = require('path');
function re_(arg){
  try{
    return require(arg);
  }catch(e){
    return {};
  }
}
const cfg = re_('./settings.js');


module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
     {
       test: /\.(png|svg|jpg|jpeg|gif)$/i,
       type: 'asset/resource',
     },
    ],
  },
  devServer: {
    port: cfg.port || 8052,
    host: cfg.host || "192.168.0.6",
    // contentBase: path.join(__dirname, 'dist')
    contentBase: path.join(__dirname)
  }
}