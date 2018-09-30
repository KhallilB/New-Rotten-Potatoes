const Review = require('../models/review')

module.exports = (app) => {

    //INDEX
    app.get('/', (req,res) => {
        Review.find()
            .then(reviews => {
                res.render('reviews-index', { reviews: reviews });
             }).catch((err) => {
                console.log('Error', err)
            })
    });

    //NEW
    app.get('/reviews/new', (req,res) => {
        res.render('reviews-new', {} );
    });

    //CREATE
    app.post('/reviews', (req, res) => {
        Review.create(req.body)
            .then((review) => {
                console.log(review);
                res.redirect('/');
            }).catch((err) => {
                console.log('Error', err)
            });
    });
}