var mongoose = require('mongoose');
var moment = require('moment');

var schema = mongoose.Schema({
    field: String,
    created: {type: Date, default: moment.utc}
});

module.exports = mongoose.model('myModel', schema);