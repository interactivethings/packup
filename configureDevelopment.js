var path = require('path');
var fs = require('fs');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function(options) {
  var entry = {};
  if (typeof options.entry === 'object') {
    Object.keys(options.entry).forEach(function(key) {
      entry[key] = [
        'webpack-hot-middleware/client?noInfo=true&reload=true',
        options.entry[key]
      ];
    });
  } else {
    entry.app = [
      'webpack-hot-middleware/client?noInfo=true&reload=true',
      options.entry
    ];
  }

  return {
    entry: entry,
    output: {
      path: path.resolve(options.root, 'build'),
      filename: '[name].js',
      pathinfo: true,
      publicPath: '/',
      // contentBase: fs.existsSync(path.resolve(options.root, 'index.html')) ? path.resolve(options.root) : __dirname
      contentBase: path.resolve(options.root)
    },
    devtool: '#eval-source-map',
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin(options.globals),
      new HtmlWebpackPlugin({
        title: options.package.name,
        template: fs.existsSync(path.resolve(options.root, 'index.html')) ? path.resolve(options.root, 'index.html') : path.resolve(__dirname, 'index.html'),
        inject: 'body',
        description: options.package.description,
        version: options.package.version
      })
    ],
    // Packup-specific options, not directly used by webpack
    port: options.port,
    loaders: {
      js: {
        loaders: ['react-hot', 'babel']
      }
    }
  };
}
