/**
 *LOCAL 
 * */
const _port = require('../config/server');
const app = require('../bin/www');

/**
 * DEPENDENCIAS
 * */
const morgan = require('morgan');
const path = require('path');
const http = require('http');
const _serverPort = _port.normalizePort(process.env.PORT || _port.parameters.port);

app.set('portHome', _serverPort);

app.set('views', path.join(__dirname, '/views'));
console.log(path.join(__dirname,'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');


/**
 * MIDDLEWARES - CORS
 * */
app.use(morgan('dev'));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    next();
});

/**
 * ROUTES
 */
 const indexRoutes = require('../routes/index');

/**
 *RUTAS 
 * */
app.use(indexRoutes);

const server = http.createServer(app);

server.listen(app.get('portHome'), _port.parameters.hostname, (err) => {
    if (err) {
        console.log(`\x1b[31m%s\x1b[0m`, `Server : ${err}`);
    } else {
        console.log(`Express server: http://${_port.parameters.hostname}:${_port.parameters.port} \x1b[33m%s\x1b[0m`, `online`);
    }
});
