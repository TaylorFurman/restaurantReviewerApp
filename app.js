const express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app);
const bodyParser = require('body-parser');

const es6Renderer = require('express-es6-template-engine');
//registers the template engine function and associates it with html files
app.engine('html', es6Renderer);
//tell Express to look in the templates directory for the template ("view") files
app.set('views', 'templates');
//set the html template engine (our es6Renderer as the default for this application
app.set('view engine', 'html');

//Body Parser


app.use(express.json());


app.get('/', (req, res) => {
    res.render('header');
});

app.get('/?', (req,res)=>{
    let term = req.query.searchTerm;
    console.log('Term: ', term);
    db
});


app.use(express.static('public'));

//calls the reviewer data from the routes folder once localhost:8000/reviewer is inputed into the URL
const reviewer = require('./routes/reviewer')

app.use('/reviewer', reviewer);

//changed from 8000 to PORT for Heroku deployment
var PORT = process.env.PORT || 8000;
server.listen(PORT, ()=>{
    console.log('listening on ', PORT);
});