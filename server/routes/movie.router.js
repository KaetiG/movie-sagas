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
//GET DETAILS REQUEST
router.get('/details/:id', (req, res) => {
  pool.query(`SELECT "title", "description", "genres"."name" FROM "movies"
  JOIN "movies_genres" ON "movies"."id"="movies_genres"."movie_id"
  JOIN "genres" ON "genres"."id"="movies_genres"."genre_id"
  WHERE "movies_genres"."movie_id" = $1
  ORDER BY "movies"."id";`, [req.params.id])
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
      console.log('error completing SELECT details query', err);
      res.sendStatus(500);
    })
})
//PUT REQUEST


module.exports = router;