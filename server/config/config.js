'use strict';

var rootPath = require('path').normalize(__dirname + '/../..');

/**
 * Load environment configuration
 */
module.exports = {
  root: rootPath,
  env: 'development',
  port: process.env.PORT || 3000,
  mongo: {
    uri: 'mongodb://localhost/todo-dev',
    options: {
      db: {
        safe: true
      }
    }
  }
};
