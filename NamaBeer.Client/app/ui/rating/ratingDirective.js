(function () {
	'use strict';

	angular
		.module('nama.ui')
		.directive('namaRating', namaRating);

	namaRating.$inject = [];

	function namaRating() {

		return {
			restrict: 'E',
			templateUrl: 'app/ui/rating/rating.html',
			controller: 'NamaRatingController',
			controllerAs: 'vm',
			bindToController: true,
			require: 'namaRating',
			scope: {
				value: '='
			},
			link: function (scope, element, attributes, controller) {

				var min = parseInt(attributes.min || "1");
				var max = parseInt(attributes.max || "10");

				controller.initialize(min, max);
			}
		};
	}

}());