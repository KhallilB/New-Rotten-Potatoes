const mongoose = require('mongoose')
const schema = mongoose.schema

const reviewSchema = {
    title: String,
    description: String,
    movieTitle: String,
};

module.exports = mongoose.model('Review', reviewSchema)