(function () {
	'use strict';

	angular
		.module('nama.common')
		.controller('NavController', navController);

	navController.$inject = ['oauth'];

	function navController(oauth) {

		var vm = this;

		vm.isCollapsed = true;
		vm.toggleCollapsed = function () {

			vm.isCollapsed = !vm.isCollapsed;
		};

		vm.login = function () {
			
			oauth.login(vm.username, vm.password)
				.then(function (response) {

					console.log(response);
				});
		};
	};

}());