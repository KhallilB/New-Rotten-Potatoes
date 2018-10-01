const Comment = require('../models/comment')

module.exports = (app) => {

    //CREATE
    app.post('/reviews/comments', (req, res) => {
        Comment.create(req.body)
            .then((comment) => {
                res.redirect(`/reviews/${comment.reviewId}`);
            }).catch((err) => {
                console.log('Error', err)
            });
    });

    //DELETE
    app.delete('/reviews/comments/:id', (req, res) => {
        console.log('DELETE comment')
        Comment.findByIdAndDelete(req.params.id)
            .then((comment) => {
                res.redirect(`/reviews/${comment.reviewId}`);
            }).catch((err) => {
                console.log('Error', err)
            })
    })
}