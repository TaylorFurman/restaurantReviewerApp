const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg-promise');
var http = require('http');
var morgan = require('morgan');

var app = express();
var server = http.createServer(app);

app.set('views', 'templates');
app.set('view engine', 'html');

app.use(bodyParser.urlencoded());
app.use('/public', express.static('public'));

app.listen();

app.use(express.static('public'));

server.listen(3000, ()=>{
    console.log('listening on *:3000');
})