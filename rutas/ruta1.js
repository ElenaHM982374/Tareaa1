const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const entryTime = new Date().toLocaleString();
    const exitTime = new Date().toLocaleString();

    const responseHtml = `
        <h1>Bienvenido a Ruta 1</h1>
        <p>Hora de entrada: ${entryTime}</p>
        <p>Hora de salida: ${exitTime}</p>
    `;
    
    res.send(responseHtml);
});

module.exports = router;

