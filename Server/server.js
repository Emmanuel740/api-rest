require('./config/config');
const express = require('express');
const moongose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');

//Parse apliccation/x-www-form-urlencode
app.use(bodyParser.urlencoded({ extended: false }));
//Parse formato a aplication/json
app.use(bodyParser.json());
//Archivo agrupador de rutas
app.use(require('./routes/index'));

//Conexion a la base de datos
moongose.connect(process.env.URLDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}, (err, resp) => {
    if (err) throw err;
    console.log('Base de datos oline');
});
//Puerto de escucha de la aplicacion
app.listen(process.env.PORT, () => {
    console.log('Escuchando por el puerto ', process.env.PORT)
});