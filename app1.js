const path = require('path');
const express = require('express');
const request = require('request');
const app1 = express();

app1.use('/', function(req, res) {
    var url = 'https://zhuanfl.com/' + req.url;
    req.pipe(request(url)).pipe(res);
});

module.exports = app1;