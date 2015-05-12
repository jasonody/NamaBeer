(function () {
	'use strict';

	angular
		.module('nama.common')
		.controller('NavController', navController);

	navController.$inject = ['user'];

	function navController(user) {

		var vm = this;

		vm.username = '';
		vm.password = '';
		vm.isCollapsed = true;
		vm.toggleCollapsed = function () {

			vm.isCollapsed = !vm.isCollapsed;
		};

		vm.profile = user.profile;

		vm.login = function () {
			user.login(vm.username, vm.password)
				.then(function (message) {
					
					if (user.profile.isLoggedIn) {
						vm.username = '';
					}

					vm.password = '';
					vm.message = message;
				});
		};

		vm.logout = function () {

			user.logout();
		}
	};

}());