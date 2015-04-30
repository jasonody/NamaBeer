(function () {
	'use strict';

	angular
		.module('nama')
		.factory('Beer', Beer);

	Beer.$inject = ['$resource', 'settings'];

	function Beer($resource, settings) {

		return $resource(settings.serverPath + '/api/beers/:id', { id: '@id' },
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