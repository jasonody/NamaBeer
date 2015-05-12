(function () {
	'use strict';

	angular
		.module('nama.common')
		.factory('formEncode', formEncode);

	formEncode.$inject = [];

	function formEncode() {

		return function (data) {

			var items = [];

			for (var name in data) {
				items.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
			}

			return items.join('&').replace(/%20/g, '+');
		};
	}

}());