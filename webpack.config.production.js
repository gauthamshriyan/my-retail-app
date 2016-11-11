var webpack = require('webpack');
var path = require('path');
var compressPlugin = new webpack.optimize.UglifyJsPlugin({
  compress: {
    warnings: false
  }
});

module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx','.json','.css']
  },
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
  },
  module: {
    loaders: [
      { test: /\.(woff|eot|ttf|woff2|svg|png|jpg|gif)/, loader: 'url', limit:10000 },
      { test: /\.css$/, loader: "style!css" },
      { test: /\.less$/, loader: "style!css!less" },
      { test: /\.json$/, loader: "json" },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.DedupePlugin(),
    compressPlugin
  ],
  devtool:'cheap-module-source-map'
};
