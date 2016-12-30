// Dependencies
var express = require('express');
var router = express.Router();

// Models
var Server = require('../models/server');

// Routes
Server.methods(['get','put','post','delete']);
Server.register(router, '/servers')

// Return router
module.exports = router;