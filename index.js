var server = require('./server');
var configure = require('./configure');

module.exports = function packup(port, entryFile, config) {
  server(configure(port, entryFile, config));
};
