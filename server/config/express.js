'use strict';

var express = require('express'),
    path = require('path'),
    config = require('./config');
/**
 * Express configuration
 */
module.exports = function(app) {
  app.use(express.static(path.join(config.root, 'public')));
  app.engine('html', require('ejs').renderFile);
  app.set('view engine', 'html');
};
