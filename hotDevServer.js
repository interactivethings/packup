/*eslint-disable*/

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

module.exports = function server(config) {
  new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    contentBase: config.output.contentBase,
    stats: {
      assets: true,
      chunkModules: false,
      chunkOrigins: false,
      chunks: true,
      colors: true,
      hash: false,
      timings: false,
      version: false
    },
    hot: true,
    historyApiFallback: true
  }).listen(config.port, '0.0.0.0', function (err, result) {
    if (err) {
      console.error(err);
    }

    console.log('Listening at localhost:' + config.port);
  });
}
