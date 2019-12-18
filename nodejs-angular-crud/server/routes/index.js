const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    console.log("entre");
    res.render('index');
    //sconsole.log('hola');
    //res.json({data:'data'});
});

module.exports = router;