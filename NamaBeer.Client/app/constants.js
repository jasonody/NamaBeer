(function () {
	'use strict';

	angular
		.module('nama')
		.constant('settings', {
			serverPath: 'http://localhost:58500'
		});

	angular
		.module('nama')
		.service('state', function () {
			this.beer = {};
		});

}());