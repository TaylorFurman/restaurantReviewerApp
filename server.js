//Web framework for node.
const express = require('express');
//Node.js body parsing middleware
//process.env.DATABASE_URL || 

const pgp = require('pg-promise')({});
var dbsettings = pgp({database: 'restaurantreviewer'})
//pg promise is a postgresSQL interface from Node.js

//*dotenv (to put secret passwords in, create .env file, then open file and put database_url (postgres://{user}:{password}@{hostname}:{port}/{database-name}) then put (Const env = require(‘dotenv’);) at the top of JS file


//internal command for node.js
var http = require('http');
//morgan is HTTP request logger middleware for node.js

var morgan = require('morgan');
//Calls database (need to ask how it knows which database to pull from);

var db = pgp(dbsettings);

//gives variables to express & http request for future use
var app = express();
var server = http.createServer(app);


app.set('views', 'templates');
app.set('view engine', 'html');

app.use(express.urlencoded());
app.use('/public', express.static('public'));

//app.listen();

app.use(express.static('public'));

//changed from 8000 to PORT for Heroku deployment
var PORT = process.env.PORT || 8000;
server.listen(PORT, ()=>{
    console.log('listening on ', PORT);
});

app.get("/", async (req, res)=>{
    var sets = await db.query('SELECT * FROM "review"');
    console.log(sets);
});

app.get("/next", async(req,res)=>{
    res = console.log("hello there");
});