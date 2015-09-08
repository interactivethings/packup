var server = require('./hotDevServer');
var configure = require('./configure');

module.exports = function packup(port, entryFile, config) {
  server(configure(port, entryFile, config));
};
