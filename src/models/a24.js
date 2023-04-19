const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    title: { type: String, required: true},
    director: {type: String, required: true},
    yearRelease: {type: Number},
    genre: {type: String},
    actor: {type: String}
});

const Movie = mongoose.model('Movie', MovieSchema)

module.exports = Movie