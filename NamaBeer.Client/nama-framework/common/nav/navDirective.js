(function () {
	'use strict';

	angular
		.module('nama.common')
		.directive('namaNav', namaNav);

	namaNav.$inject = [];

	function namaNav() {

		return {
			restrict: 'E',
			templateUrl: '/nama-framework/common/nav/nav.html',
			controller: 'NavController',
			controllerAs: 'vm',
			bindToController: true,
			scope: {
				brand: '@'
			}
		};
	}

}());