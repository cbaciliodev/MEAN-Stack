const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('Hello world - Ejecutando node_js con express');
});

router.get('/json', (req, res, next) => {

    const data = {
        valor: 'Hello world'
    }

    res.json(data);
});

router.get('/home', (req, res, next) => {
    res.render('home', null);
})

module.exports = router;