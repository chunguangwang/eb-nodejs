const path = require('path');
const express = require('express');
const request = require('request');
const app2 = express();

app2.use('/', function(req, res) {
    var url = 'https://www.epochtimes.com/9pingdownload/9pinggb_A4.pdf';
    req.pipe(request(url)).pipe(res);
});

module.exports = app2;