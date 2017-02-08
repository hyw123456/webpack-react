var helpers = require('./helpers');
var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpackConfig = require('./webpack.common');
var ENV = 'dev';
module.exports = webpackMerge(webpackConfig, {
    devtool: 'eval-source-map',

    output: {
        path: helpers.root('dist'),
        filename: '[name][hash].js',
        chunkFilename: '[id].[hash].chunk.js'
    },

    plugins: [
        new ExtractTextPlugin('[name].[hash].css'),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(ENV)
            }
        }),
    ],

    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    }
});