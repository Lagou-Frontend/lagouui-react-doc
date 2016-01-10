'use strict';

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/entry.js',
    output: {
        path: './dist',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: [
                'es3ify',
                'babel?{presets:["es2015", "stage-0", "react"]}'
            ],
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract(
                'style',
                'css',
                'autoprefixer?{browsers:["> 5%", "ie 9"]}'
            )
        }, {
            test: /\.(otf|eot|svg|ttf|woff|woff2)(\?.+)?$/,
            loader: 'url-loader?limit=8192&name=fonts/[name].[ext]'
        }]
    },
    plugins: [
        new ExtractTextPlugin('bundle.css')
    ]
};
