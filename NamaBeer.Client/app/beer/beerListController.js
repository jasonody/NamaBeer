(function () {
	'use strict';

	angular
		.module('nama')
		.controller('BeerListController', BeerListController);

	BeerListController.$inject = ['beerService', 'state'];

	function BeerListController(beerService, state) {

		var vm = this;
		var sortDirection = 'desc';
		var sortColumn = 'DateOfTasting';

		vm.sort = function (column) {

			if (sortColumn == column) {
				sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
			} else {
				sortDirection = 'asc';
			}

			beerService.query({ $orderby: column + ' ' + sortDirection }, bindBeers);

			sortColumn = column;
		}

		vm.edit = function (beer) {

			state.title = "Edit Beer";
			state.originalBeer = beer;
			state.beer = angular.copy(beer);
		};

		function init() {

			beerService.query({ $orderby: sortColumn + ' ' + sortDirection }, bindBeers);
		};

		function bindBeers(beers) {

			vm.beers = beers;
		};

		init();
	};

}());