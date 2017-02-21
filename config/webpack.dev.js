var helpers = require('./helpers');
var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpackConfig = require('./webpack.common');
var ENV = 'development';
module.exports = webpackMerge(webpackConfig, {
    devtool: 'eval-source-map',

    output: {
        path: helpers.root('dist'),
        filename: '[name][hash].js',
        chunkFilename: '[id].[hash].chunk.js'
    },

    plugins: [
        new ExtractTextPlugin('[name].[hash].css'),
        new webpack.HotModuleReplacementPlugin(),//热加载插件
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(ENV)
            }
        })
    ],

    devServer: {
        historyApiFallback: true,
        stats: 'minimal',
        inline: true,
        hot: true
        // contentBase: ''
    }
});