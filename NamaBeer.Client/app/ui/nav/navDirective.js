(function () {
	'use strict';

	angular
		.module('nama.ui')
		.directive('namaNav', namaNav);

	namaNav.$inject = [];

	function namaNav() {

		return {
			restrict: 'E',
			templateUrl: '/app/ui/nav/nav.html',
			controller: 'NavController',
			controllerAs: 'vm',
			bindController: true,
			scope: {}
		};
	}

}());