const express = require('express');
const router = express.Router();

//apenas enviar
const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        tittle: "Node Store API",
        version: "0.0.1"
    });
});

module.exports = router;