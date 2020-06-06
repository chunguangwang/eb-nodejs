const http = require('http');
const app = require('./app');

const port = 8081;//process.env.PORT || 5000;

const server = http.createServer(app);

server.listen(port);