(function () {
	'use strict';

	angular
		.module('nama')
		.controller('BeerListController', BeerListController);

	BeerListController.$inject = ['beerService', '$modal'];

	function BeerListController(beerService, $modal) {

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

			var editModal = $modal.open({
				templateUrl: 'app/beer/beerEdit.html',
				controller: 'BeerEditController',
				controllerAs: 'vm',
				resolve: {
					state: function () {
						return {
							title: "Edit Beer",
							beer: angular.copy(beer)
						};
					}
				}
			});

			editModal.result.then(function (updatedBeer) {

				beer.name = updatedBeer.name;
				beer.brewery = updatedBeer.brewery;
				beer.style = updatedBeer.style;
				beer.dateOfTasting = updatedBeer.dateOfTasting;
				beer.jasonRating = updatedBeer.jasonRating;
				beer.valRating = updatedBeer.valRating;
			});
		};

		function init() {

			beerService.query({ $orderby: sortColumn + ' ' + sortDirection }, bindBeers);
		};

		function bindBeers(beers) {

			vm.beers = beers;
		};

		init();
	}

}());