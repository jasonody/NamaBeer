(function () {
	'use strict';

	angular
		.module('nama')
		.factory('beerService', beerService);

	beerService.$inject = ['$resource', 'settings'];

	function beerService($resource, settings) {

		return $resource(settings.serverPath + '/api/beers/:id', null,
			{
				query: {
					method: 'GET',
					isArray: true,
					transformResponse: function (data, headersGetter) {

						var beers = angular.fromJson(data);

						beers.forEach(function (beer) {
							beer.dateOfTasting = new Date(beer.dateOfTasting);
						});
						
						return beers;
					}
				},
				update: { method: 'PUT' }
			});
	}

}());