const express = require('express');
const http = require('http');
const os = require('os');
const fs = require('fs');
const app = express();
console.log('Sistema operativo:'+os.platform());
console.log('Versión del OS:'+os.release());
console.log('Memoria total:'+os.totalmem()+' bytes');
console.log('Memoria libre:'+os.freemem()+' bytes');

//Módulo Operative System: 

app.get('/', (req, res) => {

    res.json('Hello World');
});

app.listen(3000);