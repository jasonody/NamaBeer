(function () {
	'use strict';

	angular
		.module('beer')
		.controller('BeerListController', BeerListController);

	BeerListController.$inject = ['Beer', '$modal', 'user'];

	function BeerListController(Beer, $modal, user) {

		var vm = this;
		var sortDirection = 'desc';
		var sortColumn = 'DateOfTasting';
		
		vm.profile = user.profile;
		vm.beers = [];

		vm.sort = function (column) {

			if (sortColumn == column) {
				sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
			} else {
				sortDirection = 'asc';
			}

			Beer.query({ $orderby: column + ' ' + sortDirection }, bindBeers);

			sortColumn = column;
		};

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

		vm.add = function () {

			var addModal = $modal.open({
				templateUrl: 'app/beer/beerEdit.html',
				controller: 'BeerEditController',
				controllerAs: 'vm',
				resolve: {
					state: function () {
						return {
							title: "Add New Beer",
							beer: new Beer({ dateOfTasting: new Date() })
						};
					}
				}
			});

			addModal.result.then(function (newBeer) {
				vm.beers.push(newBeer);
			});
		};

		function init() {

			Beer.query({ $orderby: sortColumn + ' ' + sortDirection }, bindBeers);
		}

		function bindBeers(beers) {

			vm.beers = beers;
		}

		init();
	}

}());