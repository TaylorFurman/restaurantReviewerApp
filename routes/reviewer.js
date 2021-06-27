const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) =>{
    db.any("SELECT name FROM reviewer;")
    .then(rows =>{
        console.log(rows);
        res.json(rows);
    })
    .catch(error => {
        error = console.log("Bad");
    })
})

module.exports = router;