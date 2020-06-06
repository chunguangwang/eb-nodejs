const path = require('path');
const express = require('express');
const request = require('request');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

const productRoutes = require('./api/products');
app.use('/', function(req, res) {
    var url = 'https://zhuanfl.com/' + req.url;
    req.pipe(request(url)).pipe(res);
});
app.use('/products', productRoutes);

module.exports = app;