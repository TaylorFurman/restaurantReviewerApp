const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/:name', (req, res) =>{
    console.log(req.params);
    db.any(`SELECT * FROM restaurant WHERE name ILIKE '${req.params.name}';`)
    .then(rows =>{
        console.log(rows);
        res.render('searchpage');
    
        for (var i = 0; i < rows.length; i++) {
             var row = rows[i];
             console.log(row.name);
             console.log(row.address); 
         }
             
    })
    .catch(error => {
        error = console.log("Bad");
    })
})

module.exports = router;