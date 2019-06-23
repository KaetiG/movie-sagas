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
  pool.query(`SELECT "name", "genre_id" FROM "movies_genres"
  LEFT JOIN "genres" ON "movies_genres"."genre_id"="genres"."id"
  LEFT JOIN "movies" ON "movies"."id"="movies_genres"."movie_id"
  WHERE "movies_genres"."movie_id" = $1
  ORDER BY "genres"."id";`, [req.params.id])
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
      console.log('error completing SELECT details query', err);
      res.sendStatus(500);
    })
})
//PUT REQUEST
router.put('/edit/:id', (req, res)=>{
  pool.query(`UPDATE "movies"
  SET "description" = 'Ferngully but on another planet and with special guests: the Smirfs'
  WHERE "movies"."id" = $1;`, [req.params.id])
  .then((result) => { res.send(result.rows); })
  .catch((err)=> {
    console.log('error updating movie', err);
    res.sendStatus(500);
  })
})

// router.put('/', (req, res) => {
//   const updatedMovie = req.body;

//   const queryText = `UPDATE "movies"
//   SET "description" = 'Ferngully but on another planet and with special guests: the Blue man group'
//   WHERE "movies"."id" = $1;`;

//   const queryValues = [
//     updatedMovie.description
//   ];

//   pool.query(queryText, queryValues)
//     .then(() => { res.sendStatus(200); })
//     .catch((err) => {
//       console.log('Error completing PUT query', err);
//       res.sendStatus(500);
//     });
// });

module.exports = router;