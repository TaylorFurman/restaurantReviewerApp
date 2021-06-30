const express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app);

const es6Renderer = require('express-es6-template-engine');
//registers the template engine function and associates it with html files
app.engine('html', es6Renderer);
//tell Express to look in the templates directory for the template ("view") files
app.set('views', 'public');
//set the html template engine (our es6Renderer as the default for this application
app.set('view engine', 'html');

//Body Parser
app.use(express.urlencoded({ extended: true}));
app.use(express.json());


app.get('/', (req, res) => {
    res.render('index');
});

app.post('/search', (req, res) => {
    const {search} = req.body;
    console.log (search);
    res.render('searchpage');
});


app.use(express.static('public'));

//calls the database from the routes folder once localhost:8000/*** is inputed into the URL
const search = require('./routes/search')
app.use('/search', search);

// const restaurant = require('./routes/restaurant')
// app.use('/restaurant', restaurant);

const reviewer = require('./routes/reviewer')
app.use('/reviewer', reviewer);



//changed from 8000 to PORT for Heroku deployment
var PORT = process.env.PORT || 8000;
server.listen(PORT, ()=>{
    console.log('listening on ', PORT);
});