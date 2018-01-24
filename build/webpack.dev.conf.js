'use strict';
const baseWebpackConfig = require('./webpack.base.conf');
const merge = require('webpack-merge');
const webpack = require('webpack');

module.exports = merge(baseWebpackConfig, {
    plugins: [
        new webpack.DefinePlugin({
            __server__: '\'.udesktiger.com\'',
            __protocol__: '\'http\''
        })
    ]
});
