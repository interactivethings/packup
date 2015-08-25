var server = require('./hotDevServer');
var configure = require('./configure');

module.exports = function packup(port, entryFile) {
  var config = configure(port, entryFile);
  server(config, port, entryFile);
};
