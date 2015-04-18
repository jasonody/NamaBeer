(function () {
	'use strict';

	angular
		.module('nama')
		.factory('beerService', beerService);

	beerService.$inject = ['$resource', 'settings'];

	function beerService($resource, settings) {

		return $resource(settings.serverPath + '/api/beers/:id', null,
			{
				'update': { method: 'PUT' }
			});
	};

}());