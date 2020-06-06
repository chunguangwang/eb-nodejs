
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = 8080;

module.exports = {
    entry: './src/index.js',
    // Webpack configuration goes here
    devServer: {
        compress: true,
        disableHostCheck: true,   // That solved it
    }  
};