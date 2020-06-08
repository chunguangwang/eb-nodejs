const path = require('path');
const express = require('express');
const request = require('request');
const app2 = express();

app2.use('/', function(req, res) {
    var url = 'http://www.ninecommentaries.com/chinese-simplified#/' + req.url;
    req.pipe(request(url)).pipe(res);
});

module.exports = app2;