(function () {
	'use strict';

	angular
		.module('nama')
		.controller('BeerListController', BeerListController);

	BeerListController.$inject = ['beerService'];

	function BeerListController(beerService) {

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

		function init() {

			beerService.query({ $orderby: sortColumn + ' ' + sortDirection }, bindBeers);
		};

		function bindBeers(beers) {

			vm.beers = beers;
		};

		init();
	};

}());