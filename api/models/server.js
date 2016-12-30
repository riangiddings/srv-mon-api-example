var restful = require('node-restful');
var mongoose = restful.mongoose;

var serverSchema = new mongoose.Schema({
    hostname: String,
    teatag: String,
    status:String,
    services:[String],
    ipv4: String,
    ipv6: String
});

module.exports = restful.model('Server',serverSchema);