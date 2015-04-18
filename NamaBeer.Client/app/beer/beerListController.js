(function () {
	'use strict';

	angular
		.module('nama')
		.controller('BeerListController', BeerListController);

	BeerListController.$inject = ['beerService'];

	function BeerListController(beerService) {

		var vm = this;

		function init() {

			beerService.query(bindBeers);
		};

		function bindBeers(beers) {

			vm.beers = beers;
		};

		init();
	};

}());