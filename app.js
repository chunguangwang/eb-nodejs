const path = require('path');
const express = require('express');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

const productRoutes = require('./api/products');

app.use('/products', productRoutes);

module.exports = app;