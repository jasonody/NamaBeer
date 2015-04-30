// Karma configuration
// Generated on Mon Apr 27 2015 20:54:25 GMT-0700 (Pacific Daylight Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
			'../NamaBeer.Client/scripts/angular.js',
			'../NamaBeer.Client/scripts/ui-bootstrap-tpls-0.12.1.min.js',
			'../NamaBeer.Client/scripts/angular-toastr.js',
			'../NamaBeer.Client/scripts/angular-toastr.tpls.js',
			'../NamaBeer.Client/scripts/angular-resource.js',
			'../NamaBeer.Client/scripts/angular-animate.js',
			'../NamaBeer.Client/scripts/angular-mocks.js',
      '../NamaBeer.Client/app/**/*.js',
			'./node_modules/bardjs/bower_components/sinon/index.js', //required for bardjs
			'./node_modules/bardjs/dist/bard.js',
      './app/**/*Spec.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
