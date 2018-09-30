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

}