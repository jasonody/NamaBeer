(function () {
	'use strict';

	angular
		.module('nama.common')
		.factory('tokenInterceptor', tokenInterceptor);
	angular
		.module('nama.common')
		.config(function ($httpProvider) {

			$httpProvider.interceptors.push('tokenInterceptor');
		});

	tokenInterceptor.$inject = ['$injector', '$q'];

	function tokenInterceptor($injector, $q) {

		return {
			request: request
		};

		function request(config) {

			var user = $injector.get('user');

			if (user.profile.isLoggedIn) {
				config.headers.Authorization = "Bearer " + user.profile.token;
			}

			return $q.when(config);
		}
	}

}());