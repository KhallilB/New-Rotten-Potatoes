//Using Express
const express = require('express');
const methodOverride = require('method-override')
const app = express();
app.use(methodOverride('_method'))

//Using Handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//BODY PARSER 
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

//DATABASE
const mongoose  = require('mongoose');
mongoose.connect('mongodb://localhost/rotten-potatoes', { useNewUrlParser: true });

//ROUTES
require('./controllers/reviews')(app);



app.listen(3000, () => {
    console.log('We Are Working!');
})