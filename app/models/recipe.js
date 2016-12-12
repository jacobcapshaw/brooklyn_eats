var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RecipeSchema = new Schema({
    title: String,
    cuisine: String,
    date: { type: Date, default: Date.now },
    description: String,
    mainImageUrl: String,
    images: [],
    ingredients: [],
    instructions: [],
    comments: []
});

module.exports = mongoose.model('Recipe', RecipeSchema);
