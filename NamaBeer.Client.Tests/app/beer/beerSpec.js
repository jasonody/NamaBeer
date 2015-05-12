describe('Beer', function () {
	
	var url;
	
	beforeEach(function () {
		
		bard.appModule('beer');
		bard.inject('$rootScope', '$httpBackend', 'Beer', 'settings');
		
		url = settings.serverPath + '/api/beers';
	});
	
	it('should get beers', function () {
		
		var beers = [{ name: 'My beer' }, { name: 'My second beer' }];
		
		$httpBackend
			.expect('GET', url)
			.respond(200, beers);
		
		Beer.query(function (response) {
			
			expect(response).toBeDefined();
			expect(beers[0].name).toEqual(response[0].name);
			expect(beers[1].name).toEqual(response[1].name);
		});
		
		$httpBackend.flush();
	});
	
	it('should update beer', function () {
		
		var beer = new Beer({ id: 20 });
		$httpBackend
			.expect('PUT', url + '/' + beer.id)
			.respond(204);
		
		beer.$update();
		
		$httpBackend.flush();
	});
	
	it('should save new beer', function () {
		
		var beer = new Beer({});
		$httpBackend
			.expect('POST', url)
			.respond(204);
		
		beer.$save();
		
		$httpBackend.flush();
	});
});