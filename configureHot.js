/*eslint-disable*/

var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

var config = {
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.js',
    pathinfo: true
  },
  devtool: '#eval-source-map',
  devServer: {},
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel?stage=1'},
      {test: /\.css$/, loader: 'style!css'},
      {test: /\.html$/, loader: 'file?name=[name].[ext]'},
      {test: /\.eot|\.woff|\.ttf|\.svg$/, loader: 'file-loader'},
      // inline base64 URLs for <=8k images, direct URLs for the rest
      {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'} 
    ],
    noParse: [
      /\.min\.js$/
    ]
  },
  resolve: {
    fallback: path.join(__dirname, 'node_modules')
  },
  resolveLoader: {
    modulesDirectories: [path.join(__dirname, 'node_modules')]
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: true,
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
};

module.exports = function(port, entryFile) {

  config.entry = [
    'webpack-dev-server/client?http://localhost:'+port,
    'webpack/hot/only-dev-server',
    entryFile
  ];

  // We can add react-hot-loader as a postLoader, so we don't need to modify the original loaders
  config.module.postLoaders = config.module.postLoaders || [];
  config.module.postLoaders.push({test: /\.js$/, exclude: /node_modules/, loader: 'react-hot'});
  
  // Add plugins for hot reloading
  // TODO: probably want to check if they are already in plugins
  config.plugins = config.plugins || [];
  config.plugins = config.plugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]);

  config.resolve.root = path.dirname(entryFile);

  var contentBasePath = path.resolve(path.dirname(entryFile));

  config.output.contentBase = fs.existsSync(path.join(contentBasePath, 'index.html')) ? contentBasePath : __dirname;

  config.port = port;

  return config;
}
