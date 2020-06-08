const http = require('http');
const app = require('./app');
const app1 = require('./app1');

const port = 8083;
const port1 = 8085;

const server = http.createServer(app);
const server1 = http.createServer(app1);

server.listen(port);
server1.listen(port1);


// var https = require('https'),
//     http  = require('http'),
//     util  = require('util'),
//     path  = require('path'),
//     fs    = require('fs'),
//     colors = require('colors'),
//     httpProxy = require('http-proxy');

// //
// // Create a HTTP Proxy server with a HTTPS target
// //
// httpProxy.createProxyServer({
//   target: 'https://google.com',
//   agent  : https.globalAgent,
//   headers: {
//     host: 'google.com'
//   }
// }).listen(8011);

