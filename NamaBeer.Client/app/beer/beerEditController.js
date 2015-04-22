(function () {
	'use strict';

	angular
    .module('nama')
    .controller('BeerEditController', BeerEditController);

	BeerEditController.$inject = ['state'];

	function BeerEditController(state) {

		var vm = this;
		vm.state = state;
		
		vm.cancel = function (form) {

			delete state.originalBeer;
		};

		vm.save = function () {

			state.originalBeer.name = state.beer.name;
			state.originalBeer.brewery = state.beer.brewery;
			state.originalBeer.style = state.beer.style;
			state.originalBeer.dateOfTasting = state.beer.dateOfTasting;
			state.originalBeer.jasonRating = state.beer.jasonRating;
			state.originalBeer.valRating = state.beer.valRating;

			delete state.originalBeer;
		};
	}
}());