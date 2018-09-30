//Using Express
const express = require('express');
const app = express();

//Using Handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//DATABASE
const mongoose  = require('mongoose');
mongoose.connect('mongodb://localhost/rotten-potatoes', { useNewUrlParser: true });

//MODELS
const Review = require('./models/review') 

//INDEX
app.get('/', (req,res) => {
    Review.find()
        .then(reviews => {
            res.render('reviews-index', { reviews: reviews });
        })
        .catch((err) => {
            console.log('Error', err)
        })
});


app.listen(3000, () => {
    console.log('We Are Working!');
})