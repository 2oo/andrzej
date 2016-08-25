const path = require('path'),
    webpack = require('webpack'),
    autoprefixer = require('autoprefixer');

module.exports = {

    entry: [
        'babel-polyfill',
        'webpack/hot/dev-server',
        'webpack-hot-middleware/client',
        './src/app.js'
    ],
    output: {
        path: path.resolve('./dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devtool: 'inline-source-map',
    module: {
        loaders: [{
            test: /\.less$/,
            loaders: ['style', 'css?sourceMap', 'postcss', 'less?sourceMap'],
            exclude: /node_modules/
        }, {
            test: /\.js$/,
            loaders: ['babel-loader'],
            plugins: ['transform-decorators-legacy'],
            exclude: /node_modules/,
            query: {
                presets: [
                    'react',
                    'es2015',
                    'stage-0',
                    'react-hmre'
                ],
                plugins: [
                    [
                        "transform-decorators-legacy"
                    ]
                ]
            }
        }]
    },
    postcss: function () {
        return [autoprefixer];
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.EnvironmentPlugin([
            'NODE_ENV'
        ])
    ]
};
