var path = require('path');
var fs = require('fs');
var bourbon = require('node-bourbon');

module.exports = function(options) {
  function sassLoader(loadersDef) {
    return loadersDef + '?includePaths[]=' + [
      path.resolve(options.root, 'node_modules'),
      options.root,
      bourbon.includePaths
    ].join('&includePaths[]=');
  }

  return {
    resolve: {
      root: options.root,
      fallback: path.resolve(__dirname, 'node_modules'),
      extensions: ['', '.js', '.json', '.css', '.scss']
    },
    resolveLoader: {
      root: [
        path.resolve(__dirname, 'node_modules')
      ]
    },
    
    // Packup-specific options, not directly used by webpack
    loaders: {
      js: {test: /\.js$/, include: [options.root], loaders: ['babel']},
      scss: {test: /\.scss$/, loader: sassLoader('style!css!sass')},
      css: {test: /\.css$/, loader: 'style!css'},

      // Images
      png: {test: /\.png$/, loader: 'url?limit=8192&mimetype=image/png'},
      gif: {test: /\.gif$/, loader: 'url?limit=8192&mimetype=image/gif'},
      jpg: {test: /\.jpe?g$/, loader: 'file?mimetype=image/jpg'},
      svg: {test: /\.svg$/, loader: 'url?limit=8192&mimetype=image/svg+xml'},

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
