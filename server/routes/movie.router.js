const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//GET MOVIES REQUEST
router.get('/', (req, res) => {
    pool.query('SELECT * FROM movies')
      .then((result) => { res.send(result.rows); })
      .catch((err) => {
        console.log('Error completing SELECT movie query', err);
        res.sendStatus(500);
      });
  });
//GET GENRES REQUEST
router.get('/genres', (req, res) => {
    pool.query('SELECT * FROM genres')
      .then((result) => { res.send(result.rows); })
      .catch((err) => {
        console.log('Error completing SELECT genre query', err);
        res.sendStatus(500);
      });
  });
//PUT REQUEST


module.exports = router;