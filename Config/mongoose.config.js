const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://<user_name>:<password>@cluster0.6lnoxxb.mongodb.net/proyecto_bromas?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log("Conexión exitosa a la base de datos 'proyecto_bromas'");
    })
    .catch((error) => {
        console.log(`Hubo un error al conectar con la base de datos: ${error}`);
    });
