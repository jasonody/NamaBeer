(function () {
	'use strict';

	angular
		.module('nama.common')
		.factory('localStorage', localStorage);

	localStorage.$inject = ['$window'];

	function localStorage($window) {

		var storage = $window.localStorage;

		return {
			add: add,
			get: get,
			remove: remove
		};

		function add(key, value) {

			storage.setItem(key, angular.toJson(value));
		}

		function get(key) {

			var value = storage.getItem(key);
			if (value) {
				value = angular.fromJson(value);
			}

			return value;
		}

		function remove(key) {

			storage.removeItem(key);
		}
	}

}());