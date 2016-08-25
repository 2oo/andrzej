var browserSync = require('browser-sync'),
    path = require('path'),
    fs = require('fs'),
    webpack = require('webpack'),
    webpackDevMiddleware = require('webpack-dev-middleware'),
    webpackHotMiddleware = require('webpack-hot-middleware'),
    webpackConfig = require('./webpack.config.js'),
    bundler = webpack(webpackConfig);

const BUILD_PATH = './dist',
    INDEX_HTML_PATH = './dist/index.html';

if (!fs.existsSync(BUILD_PATH)) {
    fs.mkdirSync(BUILD_PATH);
}

fs.writeFileSync(INDEX_HTML_PATH,
    `<html>
        <head>
            <title>Andrzej</title>
        </head>
        <body>
            <div id="app"></div>
            <script src="bundle.js"></script>
        </body>
    </html>`
);


browserSync({
    server: {
        baseDir: webpackConfig.output.path,
        middleware: [
            webpackDevMiddleware(bundler, {
                publicPath: '/',
                contentBase: '/',
                reactRouterNestedRoutes: true,
                inline: true,
                hot: true
            }),
            webpackHotMiddleware(bundler)
        ]
    }
});
