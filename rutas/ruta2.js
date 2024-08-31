const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const currentTime = new Date().toLocaleString();

    const responseHtml = `
        <h1>Bienvenido a Ruta 2</h1>
        <p>Hora actual: ${currentTime}</p>
    `;
    
    res.send(responseHtml);
});

module.exports = router;
