(function () {
	'use strict';

	angular
		.module('nama.common')
		.factory('formEncoding', formEncoding);

	formEncoding.$inject = [];

	function formEncoding() {

		return {
			encode: encode
		};

		function encode(data) {

			var items = [];

			for (var name in data) {
				items.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
			}

			return items.join('&').replace(/%20/g, '+');
		};
	}

}());