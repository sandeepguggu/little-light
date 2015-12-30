var path = require('path');

module.exports = {
    entry: './js/test.js',
    output: {
        path: './',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules\/(?!fybrweb)/ },
            { test: /\.css$/, loaders: ['style', 'css'], exclude: /node_modules\/(?!(fybrweb|font-awesome))/ },
            { test: /\.scss$/, loaders: ['style', 'css', 'sass'], exclude: /node_modules\/(?!fybrweb)/ },
            {
                test: /\.woff?(\?v=[0-9]\.[0-9]\.[0-9])?/,
                loader: "url-loader?limit=1&minetype=application/font-woff"
            }, {
                test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?/,
                loader: "url-loader?limit=10000&minetype=application/font-woff2"
            }, {
                test: /\.ttf?(\?v=[0-9]\.[0-9]\.[0-9])?/,
                loader: "file-loader"
            }, {
                test: /\.eot?(\?v=[0-9]\.[0-9]\.[0-9])?/,
                loader: "file-loader"
            }, {
                test: /\.svg?(\?v=[0-9]\.[0-9]\.[0-9])?/,
                loader: "file-loader"
            }
        ]
    },
    devtool: '[inline-]source-map'
}
