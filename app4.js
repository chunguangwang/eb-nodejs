const path = require('path');
const express = require('express');
const request = require('request');
const app4 = express();

app4.use('/',     function(req, res){
        res.status(200).json({
        message: 'Hello Alien',
    });
});


module.exports = app4;