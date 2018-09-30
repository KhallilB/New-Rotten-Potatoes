//Using Express
const express = require('express');
const app = express();

//Using Handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//HOME
app.get('/', (req, res) => {
    res.render('home', { msg: 'Hello World '})
})

app.listen(3000, () => {
    console.log('We Are Working!')
})