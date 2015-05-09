(function () {
	'use strict';

	angular
		.module('nama.common')
		.factory('user', user);

	user.$inject = ['oauth'];

	function user(oauth) {

		var profile = {
			username: '',
			token: '',
			tokenExpiraton: new Date(),
			get isLoggedIn() {

				return (profile.token !== '' && profile.tokenExpiraton > new Date());
			}
		};

		return {
			login: login,
			profile: profile
		};

		function login(username, password) {

			return oauth.login(username, password)
				.then(function (response) {

					profile.username = username;
					profile.token = response.data.access_token;
					profile.tokenExpiraton = new Date(response.data['.expires']);
				})
				.catch(function (response) {

					if (response.data && response.status === 400) {
						return response.data.error_description;
					}
				});
		}
	}

}());