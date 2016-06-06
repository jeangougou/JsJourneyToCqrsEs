'use strict';

let express = require('express');
let router = express.Router();

let index = require('./controllers');

/**
 * Application routes
 */
module.exports = function(app) {
  // All other routes to use Angular routing to default page
  app.get('/', index.index);
};
