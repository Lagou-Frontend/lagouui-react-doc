'use strict';

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
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: [
                    'react-hot',
                    'es3ify',
                    'babel?{presets:["es2015", "stage-0", "react"]}'
                ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loaders: [
                    'react-hot',
                    'style',
                    'css',
                    'autoprefixer?{browsers:["> 5%", "ie 9"]}'
                ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css'],
                include: /node_modules/
            },
            {
                test: /\.(otf|eot|svg|ttf|woff|woff2)(\?.+)?$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    },
    devServer: {
        contentBase: 'dist/'
    }
};
