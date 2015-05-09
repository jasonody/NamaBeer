(function () {
	'use strict';

	angular
		.module('nama.common')
		.controller('NavController', navController);

	navController.$inject = ['user'];

	function navController(user) {

		var vm = this;

		vm.isCollapsed = true;
		vm.toggleCollapsed = function () {

			vm.isCollapsed = !vm.isCollapsed;
		};

		vm.profile = user.profile;

		vm.login = function () {
			user.login(vm.username, vm.password)
				.then(function (message) {

					vm.message = message;
				});
		};
	};

}());