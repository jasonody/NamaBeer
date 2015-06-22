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
				placeholder: '@'
			},
			controllerAs: 'vm',
			bindToController: true,
			link: function (scope, element, attributes) {

				$timeout(function () {

					scope.vm.model = scope.vm.term;
					$http.get(attributes.url + scope.vm.term)
					.success(function (data) {

						scope.vm.suggestions = data[attributes.resultsproperty];
					});

				}, 2000);
			},
			controller: function () {

			}
		};
	}

}());

//http://www.htmlxprs.com/post/32/creating-an-angularjs-autocomplete-tag-input-widget
//http://stackoverflow.com/questions/18460374/angularjs-autocomplete-from-http
//https://github.com/JustGoscha/allmighty-autocomplete/blob/master/script/autocomplete.js