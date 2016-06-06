
'use strict';

var express = require('express'),
    path = require('path'),
    fs = require('fs'),
    config = require('./server/config/config'),
    mongoose = require('mongoose');

/**
 * Main application file
 */

// Default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Connect to database
var db = mongoose.connect(config.mongo.uri, config.mongo.options);

var app = express();

// Express settings
require('./server/config/express')(app);

// Routing
require('./server/routes')(app);


// Start server
app.listen(config.port, function () {
  console.log('Express server listening on port %d in %s mode', config.port, app.get('env'));
});

// Expose app
exports = module.exports = app;
