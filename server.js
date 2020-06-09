const http = require('http');
const app0 = require('./app0');
const app = require('./app');
const app1 = require('./app1');
const app2 = require('./app2');
const app3 = require('./app3');


const port0 = 8080;
const port = 8081;
const port1 = 8082;
const port2 = 8083;
const port3 = 8084;

const server0 = http.createServer(app0);
const server = http.createServer(app);
const server1 = http.createServer(app1);
const server2 = http.createServer(app2);
const server3 = http.createServer(app3);

server0.listen(port0);
server.listen(port);
server1.listen(port1);
server2.listen(port2);
server3.listen(port3);

var https = require('https'),
    http  = require('http'),
    util  = require('util'),
    path  = require('path'),
    fs    = require('fs'),
    colors = require('colors'),
    httpProxy = require('http-proxy');

//
// Create a HTTP Proxy server with a HTTPS target
//
httpProxy.createProxyServer({
  target: 'https://google.com',
  agent  : https.globalAgent,
  headers: {
    host: 'google.com'
  }
}).listen(8011);

