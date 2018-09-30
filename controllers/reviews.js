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
                    res.redirect(`/reviews/${review._id}`);
            }).catch((err) => {
                console.log('Error', err)
            });
    });

    //SHOW
    app.get('/reviews/:id', (req,res) => {
        Review.findById(req.params.id)
            .then((review) => {
                res.render('reviews-show', { review: review });
            }).catch((err) => {
                console.log('Error', err)
            })
    });
}