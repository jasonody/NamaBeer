(function () {
	'use strict';

	angular
		.module('nama.ui')
		.directive('namaAutocomplete', autocomplete);

	autocomplete.$inject = ['$http', '$timeout', '$compile'];

	function autocomplete($http, $timeout, $compile) {

		return {
			restrict: 'AE',
			replace: true,
			templateUrl: '/nama-framework/ui/autocomplete/autocomplete.html',
			scope: {
				model: '=',
				placeholder: '@',
				url: '@',
				resultsProperty: '@'
			},
			controllerAs: 'vm',
			bindToController: true,
			link: function (scope, element, attributes) {

				if (attributes.name) {
					scope.vm.name = attributes.name;
					element.removeAttr('name');
				}

				var directiveAttributes = ['class', 'model', 'url', 'resultsProperty', 'name'];
				var input = element.find('input');

				for (var attribute in attributes.$attr) {
					if (attributes.hasOwnProperty(attribute) && directiveAttributes.indexOf(attribute) < 0) {
						input.prop(attribute, attributes[attribute] === "" ? true : attributes[attribute]);
						element.removeAttr(attribute);
					}
				}

				$compile(input)(scope);
			},
			controller: 'AutocompleteController'
		};
	}

}());