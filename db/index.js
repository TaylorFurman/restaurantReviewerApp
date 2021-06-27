//pg promise is a postgresSQL interface from Node.js
const pgp = require('pg-promise')();

//estabilsh connection to database.  Because putting the file name in by itself didnt work, manually putting the data in worked.
const cn = {
    host: 'localhost',
    port: 5432,
    database: 'restaurantreviewer',
    user: 'postgres',
    password: 'password',
    max: 30 // use up to 30 connections

    // "types" - in case you want to set custom type parsers on the pool level
};

const db = pgp(process.env.DATABASE_URL||cn);

module.exports = db;