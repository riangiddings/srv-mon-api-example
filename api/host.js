// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// MongoDb
mongoose.connect('mongodb://localhost/api-db');

// Express
var host = express();
host.use(bodyParser.urlencoded({ extended:true }));
host.use(bodyParser.json());

// Default Route
host.use('/api', require('./routes/api'));

// Start Host
var port = 3000;
host.listen(port);
console.log('API is running on port %s.',port);