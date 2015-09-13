var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var assignDeep = require('assign-deep');
var values = require('object-values');
var configureCommon = require('./configureCommon');
var configureDevelopment = require('./configureDevelopment');

module.exports = function(port, entryFile, config) {
  var env = process.env.NODE_ENV || 'development';
  var rootDir = path.dirname(entryFile);
  var packagePath = path.resolve(rootDir, './package.json');

  var options = {
    globals: {
      __DEV__: (env === 'development'),
      'process.env.NODE_ENV': JSON.stringify(env)
    },
    package: fs.existsSync(packagePath) ? require(packagePath) : {name: path.basename(rootDir), title: 'Packup-App', version: '0.0.0', description: '', dependencies: {}},
    root: rootDir,
    entry: config.entry || entryFile,
    port: port
  }

  var packupConfig = assignDeep(configureCommon(options), configureDevelopment(options));

  var webpackConfig = assignDeep(packupConfig, {
    module: {
      loaders: values(packupConfig.loaders)
    }
  });

  return webpackConfig;
}