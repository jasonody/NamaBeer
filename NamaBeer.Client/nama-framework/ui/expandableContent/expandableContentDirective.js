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
			replace: true,
			link: link,
			controller: 'ExpandableContentController',
			controllerAs: 'vm',
			scope: true
		};
	}

	function link(scope, element, attrs) {

		if (attrs.animate && attrs.animate === 'false') {
			element.find('ng-transclude').parent().removeClass('animate-show');
		}
	}
}());