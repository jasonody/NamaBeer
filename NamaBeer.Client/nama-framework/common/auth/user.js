(function () {
	'use strict';

	angular
		.module('nama.common')
		.factory('user', user);

	user.$inject = ['oauth', 'localStorage'];

	function user(oauth, localStorage) {

		var PROFILE_KEY = 'profile_$aa443';
		
		var profile = {
			username: '',
			token: '',
			tokenExpiration: new Date(),
			get isLoggedIn() {

				return (profile.token !== '' && profile.tokenExpiration > new Date());
			}
		};

		initialize();

		return {
			login: login,
			logout: logout,
			profile: profile
		};

		function initialize() {

			var localProfile = localStorage.get(PROFILE_KEY);
			if (localProfile) {
				profile.username = localProfile.username,
				profile.token = localProfile.token,
				profile.tokenExpiration = new Date(localProfile.tokenExpiration)
			}
		}

		function login(username, password) {

			return oauth.login(username, password)
				.then(function (response) {

					profile.username = username;
					profile.token = response.data.access_token;
					profile.tokenExpiration = new Date(response.data['.expires']);

					localStorage.add(PROFILE_KEY, {
						username: profile.username,
						token: profile.token,
						tokenExpiration: profile.tokenExpiration
					});
				})
				.catch(function (response) {

					if (response.data && response.status === 400) {
						return response.data.error_description;
					}
				});
		}

		function logout() {

			localStorage.remove(PROFILE_KEY);
			profile.username = '';
			profile.token = '';
			profile.tokenExpiration = new Date();
		}
	}

}());