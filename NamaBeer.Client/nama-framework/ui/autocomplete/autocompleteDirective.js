(function () {
	'use strict';

	angular
		.module('nama.ui')
		.directive('namaAutocomplete', autocomplete);

	autocomplete.$inject = ['$http', '$timeout'];

	function autocomplete($http, $timeout) {

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

				//$timeout(function () {

				//	scope.vm.model = scope.vm.terms;
				//	$http.get(attributes.url + scope.vm.terms)
				//	.success(function (data) {

				//		scope.vm.suggestions = data[attributes.resultsproperty];
				//		scope.vm.showSuggestions = true;
				//	});

				//}, 2000);
			},
			controller: function ($timeout) {

				var vm = this;
				var timeout;
				
				vm.showSuggestions = false;
				vm.selectSuggestion = function (suggestion) {

					vm.model = vm.terms = suggestion;
					vm.showSuggestions = false;
				};

				vm.getSuggestions = function () {

					$timeout.cancel(timeout);
					timeout = $timeout(function () {

						$http.get(vm.url + vm.terms)
						.success(function (data) {

							vm.suggestions = data[vm.resultsProperty];
							vm.showSuggestions = true;
						});
					}, 1500);
				}
			}
		};
	}

}());