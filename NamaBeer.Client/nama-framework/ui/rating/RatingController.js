(function () {
	'use strict';

	angular
		.module('nama.ui')
		.controller('NamaRatingController', RatingController);

	RatingController.$inject = [];

	function RatingController() {

		var vm = this;
		
		this.initialize = function (max) {

			vm.stars = new Array(max);
		};

		vm.styles = function ($index) {

			return {
				'glyphicon': true,
				'glyphicon-star': $index < vm.value,
				'glyphicon-star-empty': $index >= vm.value
			};
		};
	}

}());