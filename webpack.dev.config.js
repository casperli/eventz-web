var webpack = require('webpack');
var path = require('path');
var config = require('./webpack.config');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var paths = {
    config: path.resolve(__dirname, './config'),
    i18n: path.resolve(__dirname, './app/shared/i18n')
};

config.plugins = config.plugins.concat([

    // Adds webpack HMR support. It act's like livereload,
    // reloading page after webpack rebuilt modules.
    // It also updates stylesheets and inline assets without page reloading.
    new webpack.HotModuleReplacementPlugin(),

    // Copies config.json
    new CopyWebpackPlugin([
        { from: path.resolve(paths.config, 'config.dev.json'), to: 'config.json' },
        { from: path.resolve(paths.i18n, '*.json'), to: './i18n', flatten: true }
    ])
]);

module.exports = config;