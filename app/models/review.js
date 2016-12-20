var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ReviewSchema = new Schema({
    description: String,
    cuisine: String,
    cost: String,
    region: String,
    name: String,
    address1: String,
    address2: String,
    map: String,
    phone: String,
    content: [],
    quote: String,
    image: String,
    comments: []
});

module.exports = mongoose.model('Review', ReviewSchema);
