/**
 * Imports:
 * Express
 * Path
 * Hogan Middleware
 * Server.- valores del puerto y hostname.
 * Router.- peticiones del servidor.
 */
const express = require('express');
const path = require('path');
const hoganMiddleware = require('hogan-middleware');
const server = require('./config/commons');
const router = require('./routes/index');

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'mustache');
app.engine('mustache', hoganMiddleware.__express);
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Use router:
 */
app.use('/', router);
/**
 * Server
 * port : 3000, 5000, 8000, 8080
 */
app.listen(server.port, server.hostname, () => {
    console.log(`Server running at http://${server.hostname}:${server.port}/`);
});