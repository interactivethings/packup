var path = require('path');
var fs = require('fs');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function(options) {
  return {
    entry: [
      'webpack-dev-server/client?http://localhost:' + options.port,
      'webpack/hot/only-dev-server',
      options.entryFile
    ],
    output: {
      path: path.resolve(options.root, 'build'),
      filename: 'app.js',
      pathinfo: true,
      // contentBase: fs.existsSync(path.resolve(options.root, 'index.html')) ? path.resolve(options.root) : __dirname
      contentBase: path.resolve(options.root)
    },
    devtool: '#eval-source-map',
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new webpack.DefinePlugin(options.globals),
      new HtmlWebpackPlugin({
        title: options.package.name,
        template: fs.existsSync(path.resolve(options.root, 'index.html')) ? path.resolve(options.root, 'index.html') :'index.html',
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
