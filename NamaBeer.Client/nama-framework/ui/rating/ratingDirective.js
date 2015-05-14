(function () {
	'use strict';

	angular
		.module('nama.ui')
		.directive('namaRating', namaRating);

	namaRating.$inject = [];

	function namaRating() {

		return {
			restrict: 'E',
			templateUrl: '/nama-framework/ui/rating/rating.html',
			controller: 'NamaRatingController',
			controllerAs: 'vm',
			bindToController: true,
			require: 'namaRating',
			scope: {
				value: '='
			},
			link: function (scope, element, attributes, controller) {

				var max = parseInt(attributes.max || "10");

				controller.initialize(max);
			}
		};
	}

}());