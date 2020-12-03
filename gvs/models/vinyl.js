const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content: String,


});

const vinylSchema = new Schema({
    title: String,
    band: String,
    releaseYear: Number,

    reviews: [reviewSchema]


});

module.exports = mongoose.model('Vinyl', vinylSchema);