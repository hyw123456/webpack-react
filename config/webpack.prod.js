var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var ENV = 'production';
module.exports = webpackMerge(commonConfig, {
    devtool: false,

    output: {
        path: helpers.root('dist'),
        filename: 'js/[name].[hash].js',
        chunkFilename: 'js/[id].[hash].chunk.js'
    },


    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(ENV)
            }
        }),
        new webpack.optimize.UglifyJsPlugin({ // https://github.com/angular/angular/issues/10618

        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),

        new ExtractTextPlugin('[name].[hash].css'),

        // new CopyWebpackPlugin([{
        //     from: helpers.root('src', 'assets'),
        //     to: helpers.root('dist', 'assets')
        // }]),


    ]
});