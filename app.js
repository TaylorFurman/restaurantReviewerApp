const express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app);


app.use(express.static('public'));

app.use(express.json());


//calls the reviewer data from the routes folder once localhost:8000/reviewer is inputed into the URL
const reviewer = require('./routes/reviewer')

app.use('/reviewer', reviewer);


//changed from 8000 to PORT for Heroku deployment
var PORT = process.env.PORT || 8000;
server.listen(PORT, ()=>{
    console.log('listening on ', PORT);
});



// app.get("/", async (req, res)=>{
//     //var sets = await db.query('SELECT * FROM "review"');
//     res = console.log("Howdy");
// });

// app.get("/next", async(req,res)=>{
//     res = console.log("hello there");
// });