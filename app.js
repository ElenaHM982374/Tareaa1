const express = require('express');
const app = express();

const logMiddleware = require('./middlewares/logMiddleware');
const ruta1 = require('./rutas/ruta1');
const ruta2 = require('./rutas/ruta2');


app.use(logMiddleware);

//Rutas
app.use('/ruta1', ruta1);
app.use('/ruta2', ruta2);

function saludar(req, res, next) {
    console.log("Hola");
    next();
}


app.get('/home', saludar, (req, res) => {
    res.send("Hola, estás en home");
});


app.listen(3000, () => {
    console.log("Servidor en http://localhost:3000");
});
