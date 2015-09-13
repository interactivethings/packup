/*eslint-disable*/

var path = require('path');
var express = require('express');
var request = require('request');
var webpack = require('webpack');
var devMiddleware = require('webpack-dev-middleware');
var hotMiddleware = require('webpack-hot-middleware');

module.exports = function server(config) {
  var app = express();
  var compiler = webpack(config);

  app.use(devMiddleware(compiler, {
      publicPath: config.output.publicPath,
      contentBase: config.output.contentBase,
      stats: {
        assets: true,
        chunkModules: false,
        chunkOrigins: false,
        chunks: false,
        colors: true,
        hash: false,
        timings: true,
        version: false
      }
    }));

  app.use(hotMiddleware(compiler));

  // Support for pushState URLs
  app.get('*', function(req, res, next) {
    var ext = path.extname(req.url);
    if ((ext === '' || ext === '.html') && req.url !== '/') {
      req.pipe(request(req.protocol + '://' + req.hostname + ':' + req.port + '/index.html')).pipe(res);
    } else {
      next();
    }
  });

  app.listen(config.port, '0.0.0.0', function (err, result) {
    if (err) {
      return console.error(err);
    }

    console.log('Listening at localhost:' + config.port);
  });
};