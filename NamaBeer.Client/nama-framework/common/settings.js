(function () {
	'use strict';

	angular
		.module('nama.common')
		.provider('settings', settingsProvider);

	function settingsProvider() {

		var values = {};

		this.import = function (data) {

			this.values = data;
		};

		this.$get = function settingsFactory() {

			return this.values;
		};
	}

}());