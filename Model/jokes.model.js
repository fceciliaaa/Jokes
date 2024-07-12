const mongoose = require('mongoose');

const colletionJokes = new mongoose.Schema({
  setup:{
    type: String,
    required: [true, 'El campo setup es requerido'],
    minlength: [10, 'El setup debe contener al menos 10 caracteres']
  },
  punchline: {
    type: String,
    required: [true, 'El campo punchline es requerido'],
    minlength: [3, 'El setup debe contener al menos 3 caracteres']
  }
})

const Jokes = mongoose.model('Joke', colletionJokes);

module.exports = Jokes;