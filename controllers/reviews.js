const Review = require('../models/review')
const Comment = require('../models/comment')

module.exports = (app) => {

    //INDEX
    // app.get('/', (req,res) => {
    //     Review.find()
    //         .then(reviews => {
    //             res.render('reviews-index', { reviews: reviews });
    //          }).catch((err) => {
    //             console.log('Error', err)
    //         })
    // });

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
                Comment.find({ reviewId: req.params.id })
                    .then((comment) => {
                        res.render('reviews-show', { review: review, comment: comment });
                    })
            }).catch((err) => {
                console.log('Error', err)
            })
    });

    //EDIT
    app.get('/reviews/:id/edit', (req, res) => {
        Review.findById(req.params.id)
            .then((review) => {
                res.render('reviews-edit', { review: review });
            }).catch((err) => {
                console.log('Error', err)
            })
    });

    //UPDATE
    app.put('/reviews/:id', (req,res) => {
        Review.findByIdAndUpdate(req.params.id, req.body)
            .then((review) => {
                res.redirect(`/reviews/${review._id}`);
            }).catch((err) => {
                console/log('Error', err)
            })
    });

    //DELETE
    app.delete('/reviews/:id', (req,res) => {
        Review.findByIdAndRemove(req.params.id, req.body)
            .then((review) => {
                res.redirect('/');
            }).catch((err) => {
                console.log('Error', err)
            })
    })
}