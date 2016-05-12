module.exports = function (config) {
  var webpackConfig = require('./webpack.config');
  webpackConfig.entry = {};

  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '.',

    // list of files / patterns to load in the browser
    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'app/**/*.spec.ts',
    ],

    frameworks: ['jasmine'],

    preprocessors: {
      'app/**/*.spec.ts' : ['webpack']
    },

    webpack: webpackConfig,

    webpackMiddleware: {
        noInfo: true
    },

    // list of files to exclude
    exclude: [],

    // test results reporter to use
    // possible values: dots || progress || growl
    reporters: ['progress'],

    // web server port
    port: 8082,

    // cli runner port
    runnerPort: 9000,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // Start these browsers, currently available:
    // - Chrome
    // - Firefox
    // - PhantomJS
    browsers: ['Electron'],

    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 20000,

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: true
  });

};