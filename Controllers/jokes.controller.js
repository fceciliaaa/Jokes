const Jokes = require('./../Model/jokes.model') //conexion con el modelo

/*Mostrar todas las bromas */
module.exports.allJokes = (req, res)=>{
  Jokes.find()
    .then((listJokes) => {
      return res.status(200).json(listJokes);
    })
    .catch((error) => {
      return res.status(400).json(error);
    });
};


/*Encontrar broma por ID */
module.exports.getAJoke = (req, res)=>{s
  Jokes.findById({_id: req.params.id})
    .then((jokeId)=>{
      if (!jokeId){
        res.statusMessage = 'Broma no encontrada.';
        return res.status(404).json({mensaje: 'Broma no encontrada.'}); 
      }

      return res.status(200).json(jokeId)
    })
    .catch((error) => {
      return res.status(400).json(error);
    });
}


/*Añadir nueva broma */
module.exports.addNewJoke = (req, res)=>{
  const {setup, punchline} = req.body

    if(!setup || !punchline){
        res.statusMessage = 'Por favor proporciona setup y punchline';
        return res.status(406).json({mensaje: 'Por favor proporciona setup y punchline'})
    }
    
  Jokes.create(req.body)
    .then((newJoke) => {
      return res.status(200).json(newJoke);
    })
    .catch((error) => {
        return res.status(400).json(error);
    });
};


/*Actualizar broma */
module.exports.updateAJoke = (req, res)=>{
  const updateJoke ={}
  const {setup, punchline} = req.body

  if (setup){
    updateJoke.setup = setup;
  }
  if (punchline){
    updateJoke.punchline = punchline;
  }

  Jokes.findByIdAndUpdate({_id: req.params.id}, updateJoke, {new: true})
    .then((jokeId)=>{
      return res.status(200).json(jokeId)
    })
    .catch((error) => {
      return res.status(400).json(error);
  });
}


/*Borrar una broma */
module.exports.deleteAJoke = (req, res)=>{
  Jokes.findOneAndDelete({_id: req.params.id})
    .then(() => {
      return res.status(200).end();
    })
    .catch((error) => {
        return res.status(400).json(error);
    });
};