const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema = {
    title: String,
    description: String,
    movieTitle: String,
};

module.exports = mongoose.model('Review', reviewSchema)