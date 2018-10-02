const MovieDb = require('moviedb-promise')
const moviedb = new MovieDb('b248b4ab40f0e0a624caa46359e8a707')
const Movie = require('../models/movie')

module.exports = (app) => {

    //HOME
    app.get('/', (req, res) => {
        moviedb.miscNowPlayingMovies()
            .then((movie) => {
                res.render('movies-index', { movie: movie.results })
                console.log(movie.results)
            }).catch((err) => {
                console.log('Error', err)
            });
    });

    //SHOW
    app.get('/movies/:id', (req, res) => {
        moviedb.movieInfo({ id: req.params.id })
            .then((movie) => {
                moviedb.movieTrailers({ id: req.params.id })
                    .then((videos) =>{
                        movie.trailer_youtube_id = videos_youtube[0].source
                    });
                res.render('movies-show', { movie: movie })
            }).catch((err) => {
                console.log('Error', err)
            });
    });
}
