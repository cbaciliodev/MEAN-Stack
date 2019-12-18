const server = {

    parameters: {
        port: 3000,
        hostname: '127.0.0.1'
    },
   
    normalizePort: (val) => {
        var port = parseInt(val, 10);

        if (isNaN(port)) {
            // named pipe
            return val;
        }

        if (port >= 0) {
            // port number
            return port;
        }

        return false;
    }
};

module.exports = server;