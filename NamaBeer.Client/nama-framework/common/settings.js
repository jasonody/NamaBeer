(function () {
	'use strict';

	angular
		.module('nama.common')
		.provider('settings', settingsProvider);

	function settingsProvider() {

		this.values = {
			serverPath: ''
		};

		this.import = function (data) {

			for (var property in data) {
				if (data.hasOwnProperty(property)) {
					this.values[property] = data[property];
				}
			}
		};

		this.$get = function settingsFactory() {

			return this.values;
		};
	}

}());