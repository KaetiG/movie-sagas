const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//GET MOVIES REQUEST

//gets all data in movies table from database

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
//gets the names and genre_ids from joint table
//i dont think I actually need the LEFTs, and I am unsure still when I would use them
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

// router.put('/edit/:id', (req, res)=>{
//   pool.query(`UPDATE "movies"
//   SET "description" = '1$'
//   WHERE "movies"."id" = '$2';`, [req.params.description, req.params.id])
//   .then((result) => { res.sendStatus(200); })
//   .catch((err)=> {
//     console.log('error updating movie', err);
//     res.sendStatus(500);
//   })
// })

router.put('/edit_movie', (req, res) => {
  console.log('req.body:', req.body.id, req.body.title, req.body.description);
  pool.query(`
  UPDATE "movies" SET "title"=$1, "description"=$2 WHERE "id"=$3;`, [req.body.title, req.body.description, req.body.id]
  ).then(result => {
      res.sendStatus(200)
  }).catch(error => {
      console.log('error with update_movie get:', error);
      res.sendStatus(500);
  })
})

module.exports = router;