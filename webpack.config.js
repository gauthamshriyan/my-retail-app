var webpack = require('webpack');
var path = require('path');

module.exports = {
    resolve: {
        extensions: ['', '.js', '.jsx','.json','.css']
    },
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/index.js'
    ],
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist',
        hot: true
    },
    module: {
        loaders: [
            { test: /\.(woff|eot|ttf|woff2|svg|png|jpg|gif)/, loader: 'url', limit:10000 },
            { test: /\.css$/, loader: "style!css" },
            { test: /\.less$/, loader: "style!css!less" },
            { test: /\.json$/, loader: "json" },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'react-hot!babel'
            }
        ]
    },
    devtool:'eval'
};
