const http = require('http');
const app0 = require('./app0');
const app = require('./app');
const app1 = require('./app1');
const app2 = require('./app2');
const app3 = require('./app3');
const app4 = require('./app4');


const port0 = 8080;
const port = 8081;
const port1 = 8082;
const port2 = 8083;
const port3 = 8084;
const port4 = 9001;

const server0 = http.createServer(app0);
const server = http.createServer(app);
const server1 = http.createServer(app1);
const server2 = http.createServer(app2);
const server3 = http.createServer(app3);
const server4 = http.createServer(app4);


server0.listen(port0);
server.listen(port);
server1.listen(port1);
server2.listen(port2);
server3.listen(port3);
server4.listen(port4);