//Using Express
const express = require('express');
const app = express();

//Using Handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//MOCK ARRAY OF REVIEWS
let reviews = [
    { title: 'One Review' },
    { title: 'Another Review' }
]

//INDEX
app.get('/', (req,res) => {
    res.render('reviews-index', { reviews: reviews });
});


app.listen(3000, () => {
    console.log('We Are Working!');
})