//require('./config/config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/usuario', (req, res) => {

    res.json('Get Uusraio');
});

app.get('/usuario/:id/:nombre', (req, res) => {
    let id = req.params.id;
    let nombre = req.params.nombre;
    res.json({
        id,
        nombre
    });
});
app.post('/usuario', (req, res) => {
    let nombre = req.body.nombre;
    let edad = req.body.edad;

    if (nombre === undefined || edad === undefined) {
        res.status(400).json({
            ok: 'false',
            err: 'Favor de completar todos los campos'
        })
    } else {
        res.json({
            nombre,
            edad
        });
    }
});
app.put('/usuario', (req, res) => {

    res.json('Put Usuario');
});
app.delete('/usuario', (req, res) => {

    res.json('Delete Usuario');
});

app.listen(3000, () => {
    console.log('Escuchando por el puerto 3000');
});