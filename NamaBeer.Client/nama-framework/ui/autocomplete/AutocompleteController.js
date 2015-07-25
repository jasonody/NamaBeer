(function () {
	'use strict';

	angular
		.module('nama.ui')
		.controller('AutocompleteController', AutocompleteController);

	AutocompleteController.$inject = ['$timeout', '$http'];

	function AutocompleteController($timeout, $http) {

		var vm = this;
		var timeout;

		vm.terms = vm.model;
		vm.showSuggestions = false;
		vm.selectSuggestion = function (suggestion) {

			vm.model = vm.terms = suggestion;
			vm.showSuggestions = false;
		};

		vm.getSuggestions = function () {

			$timeout.cancel(timeout);

			if (vm.terms && vm.terms.length > 0) {
				timeout = $timeout(function () {

					$http.get(vm.url + vm.terms)
					.success(function (data) {

						if (data[vm.resultsProperty].length > 0) {
							vm.suggestions = data[vm.resultsProperty];
							vm.showSuggestions = true;
						}
					});
				}, 1000);
			}
		}
	}
}());