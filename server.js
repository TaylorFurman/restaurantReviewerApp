//Fast, unopinionated, minimalist web framework for node.
const express = require('express');
//Node.js body parsing middleware
const bodyParser = require('body-parser');
//pg promise is a postgresSQL interface from Node.js
const pgp = require('pg-promise');
//internal command for node.js
var http = require('http');
//morgan is HTTP request logger middleware for node.js
var morgan = require('morgan');
//Calls database (need to ask how it knows which database to pull from);
var dbsettings = process.env.DATABASE_URL || {database: ''};
var db = pgp(dbsettings);

//gives variables to express & http request for future use
var app = express();
var server = http.createServer(app);


app.set('views', 'templates');
app.set('view engine', 'html');

app.use(bodyParser.urlencoded());
app.use('/public', express.static('public'));

app.listen();

app.use(express.static('public'));

//changed from 8000 to PORT for Heroku deployment
var PORT = process.env.PORT || 8000;
server.listen(PORT, ()=>{
    console.log('listening on ', PORT);
});