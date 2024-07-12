const express = require('express');
const app = express();

require('./Config/mongoose.config');

const RoutesJokes = require('./Routes/jokes.routes');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', RoutesJokes);


app.listen(8080, () => {
  console.log('El servidor ya está encendido en el puerto 8080.');
});