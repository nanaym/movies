const Pool = require('pg').Pool;
require('dotenv').config();

const conopts = {
    user: '',
    password: '',
    host: '',
    database: ''
}

const pool = new Pool(conopts);

const getMovies = (cb) => {
    pool.query('SELECT * from movies', (err, results) => {
        if (err) throw err;
        console.dir(results);
        cb(results.rows);
    })
}

const addMovie = (newMovie, cb) => {
    const { title, year, rating } = newMovie;
    pool.query('INSERT INTO movies (title, year, rating) VALUES (?, ?, ?)', [title, year, rating], (err, results) => {
        if (err) throw err;
        console.dir(results);
        cb(results.rowCount);
    })
}


module.exports = { getMovies, addMovie };