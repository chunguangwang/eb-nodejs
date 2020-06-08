const path = require('path');
const express = require('express');
const request = require('request');
const app3 = express();
app3.use(express.static(path.join(__dirname, 'build')));

app3.use('/', function(req, res) {
    var url = 'https://www.google.com/' + req.url;
    req.pipe(request(url)).pipe(res);
});

module.exports = app3;