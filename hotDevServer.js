/*eslint-disable*/

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

module.exports = function server(config) {
  new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    contentBase: config.output.contentBase,
    stats: { colors: true, cached: false },
    hot: true,
    historyApiFallback: true
  }).listen(config.port, 'localhost', function (err, result) {
    if (err) {
      console.error(err);
    }

    console.log('Listening at localhost:' + config.port);
  });
}
