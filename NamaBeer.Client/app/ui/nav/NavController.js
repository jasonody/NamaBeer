(function () {
	'use strict';

	angular
		.module('nama.ui')
		.controller('NavController', navController);

	navController.$inject = [];

	function navController() {

		var vm = this;

		vm.isCollapsed = true;
		vm.toggleCollapsed = function () {

			vm.isCollapsed = !vm.isCollapsed;
		};
	};

}());