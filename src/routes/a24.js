const express = require('express');
const router = express.Router();

const Movie = require('../models/a24')

/** Route to get all movies. */
router.get('/', (req, res) => {
    Movie.find().then((movies) => {
        return res.json({movies})
    })
    .catch((err) => {
        throw err.message
    })
})

/** Route to get one movie by id. */
router.get('/:movieId', (req, res) => {
    return res.send(`A24 Movie with id ${req.params.movieId}`)
})

/** Route to add a new movie by a24. */
router.post('/', (req, res) => {
    let movie = new Movie(req.body)
    movie.save()
    .then(movie => {
        return res.json({movie})
    })
    .catch((err) => {
        throw err.message
    })
})

/** Route to update an existing movie. */
router.put('/:movieId', (req, res) => {
    return res.send({
        message: `Update movie with id ${req.params.movieId}`,
        data: req.body
    })
})

/** Route to delete a movie. */
router.delete('/:movieId', (req, res) => {
    return res.send(`Delete a movie with id ${req.params.movieId}`)
})

module.exports = router;