const webpack = require('webpack');

module.exports = {
    entry: {
        src: './src/app.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
};
