const express = require('express');
const app = express();

const productRoutes = require('./api/products');

app.use('/products', productRoutes);

module.exports = app;