const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewComment = {
    title: String,
    description: String,
    reviewId: { type: Schema.Types.ObjectId , ref: 'Review' }
};

module.exports = mongoose.model('Comment', reviewComment)