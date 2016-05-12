var webpack = require('webpack');
var path = require('path');
var config = require('./webpack.config');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var paths = {
    config : path.resolve(__dirname, './config'),
    i18n: path.resolve(__dirname, './app/shared/i18n')
};

config.plugins = config.plugins.concat([

    // Reduces bundles total size
    new webpack.optimize.UglifyJsPlugin({
        sourceMap: false,
        mangle: {

            // You can specify all variables that should not be mangled.
            // For example if your vendor dependency doesn't use modules
            // and relies on global variables. Most of angular modules relies on
            // angular global variable, so we should keep it unchanged
            except: ['$super', '$', 'exports', 'require', 'angular']
        }
    }),

    // Copies config.json
    new CopyWebpackPlugin([
        { from: path.resolve(paths.config, 'config.template.json'), to: 'config.json' },
        { from: path.resolve(paths.i18n, '*.json'), to: './i18n', flatten: true }
    ])
]);

module.exports = config;