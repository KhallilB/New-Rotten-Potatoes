const MovieDb = require('moviedb-promise')
const moviedb = new MovieDb('b248b4ab40f0e0a624caa46359e8a707')
const Movie = require('../models/movie')

module.exports = (app) => {

    //HOME
    app.get('/', (req, res) => {
        moviedb.miscNowPlayingMovies()
            .then((movie) => {
                res.render('movies-index', { movie: movie})
            }).catch((err) => {
                console.log('Error', err)
            });
    });
}
