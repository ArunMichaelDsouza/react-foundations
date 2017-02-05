var path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        filename: './dist/bundle.js'
    },
    module: {
        loaders: [{
            test: [/\.jsx?$/, /\.js?$/],
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
};
