const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const should = chai.should();
const Review = require('../models/review');

const sampleReview = {

    "title": "Super Sweet Review",
    "movie-title": "La La Land",
    "description": "A great review of a lovely movie."
}

chai.use(chaiHttp);

describe('Review', () => {

    //Test INDEX
    it('INDEX all reviews on / GET', (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.html;
                done();
            });
    });

    //Test NEW
    it('should display new form on /reviews/new GET', (done) => {
        chai.request(server)
            .get(`/reviews/new`)
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.html;
                done();
            })
    })

    //Test SHOW
    it('should show a single review on /reviews/<id> GET', (done) => {
        var review = new Review(sampleReview);
        review.save((err, review) => {
            chai.request(server)
                .get(`/reviews/${review._id}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.should.be.html;
                    done();
                });
        });
    });

    //Test EDIT
    it('should edit a single review on /reviews/<id> GET', (done) => {
        var review = new Review(sampleReview);
        review.save((err, review) => {
            chai.request(server)
                .get(`/reviews/${review._id}/edit`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.should.be.html;
                    done();
                });
        });
    });


    after(() => {
        Review.deleteMany({ title: 'Super Sweet Review' })
            .exec((err, reviews) => {
                console.log(reviews)
                reviews.remove();
            });
    });

    //Test CREATE
    it('should creat a single review on /reviews POST', (done) => {
        chai.request(server)
            .post('/reviews')
            .send(sampleReview)
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.html;
                done();
            });
    });

    //Test UPDATE
    it('should update a single review on /reviews/<id> PUT', (done) => {
        var review = new Review(sampleReview)
        review.save((err, review) => {
            chai.request(server)
            .put(`/reviews/${review._id}`)
            .send({ 'title': 'Updated Title' })
            .end((err, res) => {
                res.should.have.status(200)
                res.should.be.html;
                done();
            });
        });
    });

    //Test DELETE
    it('should delete a single review on /reviews/<id> DELETE', (done) => {
        var review = new Review(sampleReview)
        review.save((err, review) => {
            chai.request(server)
            .delete(`/reviews/${review._id}`)
            .end((err, res) => {
                res.should.have.status(200)
                res.should.be.html;
                done();
            });
        });
    });
    
})