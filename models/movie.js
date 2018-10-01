const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = {
    title: String,
    genre_id: String,
    poster_path: String,
    vote_average: Number 
}

module.exports = mongoose.model('Movie', movieSchema)