var webpack = require('webpack');
var path = require('path');

const SRC_DIR = path.join(__dirname, 'client', 'src');

var config = {
  context: __dirname + '/client',

  entry: {
    app: './app.js'
  },
  output: {
    path: __dirname + '/client',
    filename: 'bundle.js'
  }
}

module.exports = config;
