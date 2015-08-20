var server = require('./hotDevServer');
var configureHot = require('./configureHot');

module.exports = function packup(port, entryFile) {
  var config = configureHot(port, entryFile);
  server(config, port, entryFile);
};
