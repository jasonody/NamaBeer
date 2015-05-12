(function () {
	'use strict';

	angular
		.module('beer')
		.config(config);

	config.$inject = ['settingsProvider'];

	function config(settingsProvider) {

		settingsProvider.import({

			serverPath: 'http://localhost:58500'
		});
	}

}());