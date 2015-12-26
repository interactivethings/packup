var path = require('path');
var fs = require('fs');

module.exports = function(options) {

  return {
    resolve: {
      root: options.root,
      fallback: path.resolve(__dirname, 'node_modules')
    },
    resolveLoader: {
      fallback: path.resolve(__dirname, 'node_modules')
    },
    
    // Packup-specific options, not directly used by webpack
    loaders: {
      js: {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      css: {test: /\.css$/, loader: 'style!css?modules&localIdentName=[name]-[local]-[hash:base64:5]'},

      // Images
      png: {test: /\.png$/, loader: 'url?limit=8192&mimetype=image/png'},
      gif: {test: /\.gif$/, loader: 'url?limit=8192&mimetype=image/gif'},
      jpg: {test: /\.jpe?g$/, loader: 'file'},
      svg: {test: /\.svg$/, loader: 'file'},

      // Fonts
      woff2: {test: /\.woff2$/, loader: 'url?limit=8192&mimetype=application/font-woff2'},
      woff: {test: /\.woff$/, loader: 'url?limit=8192&mimetype=application/font-woff'},
      ttf: {test: /\.ttf$/, loader: 'file'},
      eot: {test: /\.eot$/, loader: 'file'},

      // Other
      json: {test: /\.json$/, loader: 'json'},
      html: {test: /\.html$/, loader: 'file?name=[name].[ext]'}
    }
  };
}
