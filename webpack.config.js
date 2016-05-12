var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var paths = {
  app: path.resolve(__dirname, './app'),
  build: path.resolve(__dirname, './build'),
  nodemodules: path.resolve(__dirname, 'node_modules')
};

module.exports = {
  devtool: 'sourcemap',
  entry: path.resolve(paths.app, "bootstrap.ts"),
  output: {
    path: paths.build,
    filename: 'bundle.js'
  },
  devServer: { outputPath: paths.build },
  module: {
    preLoaders: [
      { test: /\.ts$/, loader: "tslint" }
    ],
    loaders: [
      { test: /\.ts$/, exclude: [/node_modules/], loader: 'ng-annotate!ts' },
      { test: /\.html$/, loader: 'raw' },
      { test: /\.less$/, loader: "style!css!less" },
      { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' }
    ]
  },
  resolve: {
    extensions: ["", ".js", ".ts"]
  },
  plugins: [
    // Injects bundles in your index.html instead of wiring all manually.
    // It also adds hash to all injected assets so we don't have problems
    // with cache purging during deployment.
    new HtmlWebpackPlugin({
      template: path.resolve(paths.app, "index.html"),
      inject: 'body',
      hash: true
    }),
  ]
};