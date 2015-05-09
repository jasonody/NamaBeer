(function () {
	'use strict';

	angular
		.module('nama.common')
		.factory('oauth', oauth);

	oauth.$inject = ['$http', 'formEncode', 'settings'];

	function oauth($http, formEncode, settings) {

		return {
			login: login
		};

		function login(username, password) {

			var config = {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			};

			var data = formEncode({
				username: username,
				password: password,
				grant_type: 'password'
			});

			return $http.post(settings.serverPath + '/token', data, config);
		}
	}

}());