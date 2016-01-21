(function () {
	'use stict';

	angular
		.module('nama.ui')
		.directive('namaExpandableContent', expandableContent);

	expandableContent.$inject = [];

	function expandableContent() {

		return {
			restrict: 'AE',
			templateUrl: '/nama-framework/ui/expandableContent/expandableContent.html',
			transclude: true,
			controller: 'ExpandableContentController',
			controllerAs: 'vm',
			scope: true
		};
	}
}());