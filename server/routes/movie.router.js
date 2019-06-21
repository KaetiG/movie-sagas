const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//GET MOVIES REQUEST
router.get('/', (req, res) => {
    const databaseQuery = 'SELECT * FROM movies';
    pool.query(databaseQuery)
      .then((result) => { res.send(result.rows); })
      .catch((err) => {
        console.log('Error completing SELECT movie query', err);
        res.sendStatus(500);
      });
  });
//GET GENRES REQUEST

//PUT REQUEST


module.exports = router;