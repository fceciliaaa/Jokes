const express = require('express');
const jokesController = require('./../Controllers/jokes.controller'); //conexion con el controlador
const router = express.Router();

router.get('/jokes',  jokesController.allJokes);
router.get('/jokes/:id', jokesController.getAJoke);
// router.get('/random', )
router.post('/new', jokesController.addNewJoke);
router.put('/update/:id', jokesController.updateAJoke);
router.delete('/delete/:id', jokesController.deleteAJoke);

module.exports = router;