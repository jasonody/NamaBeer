describe('BeerListController', function () {
	
	beforeEach(module('beer'));
	
	var $controller;
	var $rootScope;
	var $modal;
	var $q;
	
	var beers;
	var controller;
	var beerOptions;
	
	beforeEach(inject(function (_$controller_, _$rootScope_, _$modal_, _$q_) {
		
		$controller = _$controller_;
		$rootScope = _$rootScope_;
		$modal = _$modal_;
		$q = _$q_;
		
		beers = [ {}, {} ];
		var Beer = function () {};
		Beer.query = function (options, next) {

			beerOptions = options;
			next(beers);
		};
		
		controller = $controller('BeerListController', { Beer: Beer,  $modal: $modal });
	}));
	
	it('should have some beers', function () {
		
		expect(controller.beers.length).toEqual(beers.length);
		expect(beerOptions.$orderby).toEqual('DateOfTasting desc');
	});

	describe('sort', function () {
		
		it('should reverse sorting direction for same column', function () {
			
			var currentColumn = beerOptions.$orderby.substring(0, beerOptions.$orderby.indexOf(' '));
			controller.sort(currentColumn);
			
			expect(beerOptions.$orderby).toEqual(currentColumn + ' asc');
			
			controller.sort(currentColumn);
			
			expect(beerOptions.$orderby).toEqual(currentColumn + ' desc');
		});
		
		it('should use asc when sorting on a different column', function () {
			
			controller.sort('SomeNewColumn');
			
			expect(beerOptions.$orderby).toContain('asc');
		});
	});
	
	describe('add', function () {
		
		var deferred;
		
		beforeEach(function () {
			
			deferred = $q.defer();
			spyOn($modal, ['open']).and.returnValue({ result: deferred.promise });
		});
		
		it('should open a modal dialog', function () {
			
			controller.add();
			
			expect($modal.open).toHaveBeenCalled();
			var args = $modal.open.calls.argsFor(0);
			expect(args[0].templateUrl).toContain('beerEdit.html');
			expect(args[0].controller).toContain('BeerEditController');
			expect(args[0].resolve.state().title).toContain('Add');
		});
		
		it('should add new beer if promise from modal is resolved', function () {
			
			var newBeer = { name: 'My new beer' };
			var originalLength = beers.length;
			
			controller.add();
			deferred.resolve(newBeer);
			$rootScope.$digest();
			
			expect(beers.length).toEqual(originalLength + 1);
			expect(beers).toContain(newBeer);
		});
		
		it('should not add beer if promise from modal is rejected', function () {
			
			var originalLength = beers.length;
			
			controller.add();
			deferred.reject();
			$rootScope.$digest();
			
			expect(beers.length).toEqual(originalLength);
		});
	});
	
	describe('edit', function () {
		
		var deferred;
		
		beforeEach(function () {
			
			deferred = $q.defer();
			spyOn($modal, ['open']).and.returnValue({ result: deferred.promise });
		});
		
		it('should open a modal dialog', function () {
			
			var beer = { name: 'Beer to edit' };
			
			controller.edit(beer);
			
			expect($modal.open).toHaveBeenCalled();
			var args = $modal.open.calls.argsFor(0);
			expect(args[0].templateUrl).toContain('beerEdit.html');
			expect(args[0].controller).toContain('BeerEditController');
			expect(args[0].resolve.state().title).toContain('Edit');
			expect(args[0].resolve.state().beer).toEqual(beer);
		});
		
		it('should update beer if promise from modal is resolved', function () {
			
			var beerToEdit = beers[0];
			var editedBeer = { name: 'Edited beer', brewery: 'Edited brewery', style: 'Editied style' };
			expect(beerToEdit.name).not.toEqual(editedBeer.name);
			
			controller.edit(beerToEdit);
			deferred.resolve(editedBeer);
			$rootScope.$digest();
			
			expect(beerToEdit.name).toEqual(editedBeer.name);
			expect(beerToEdit.brewery).toEqual(editedBeer.brewery);
			expect(beerToEdit.style).toEqual(editedBeer.style);
		});
		
		it('should not update beer if promise from modal is rejected', function () {
			
			var beerToEdit = angular.copy(beers[0]);
			
			controller.edit(beerToEdit);
			deferred.reject();
			$rootScope.$digest();
			
			expect(beers[0]).toEqual(beerToEdit);
		});
	});
});