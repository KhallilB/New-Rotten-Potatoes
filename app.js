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

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/rotten-potatoes', { useNewUrlParser: true });

const port = process.env.PORT || 3000;

//ROUTES
require('./controllers/reviews')(app);
require('./controllers/comments')(app);
require('./controllers/movies')(app);

//EXPORTING
module.exports = (app);

app.listen(port, () => {
    console.log('We Are Working!');
})