const path = require('path');
const express = require('express');
const request = require('request');
const app3 = express();

app3.use('/', function(req, res) {
    var url = 'https://www.google.com/' + req.url;
    req.pipe(request(url)).pipe(res);
});

app3.use('/helloAlien',     function(req, res){
        res.status(200).json({
        message: 'Hello Alien',
    });
});


module.exports = app3;