describe('NamaRatingController', function () {
	
	var controller;
	
	beforeEach(function () {
		
		bard.appModule('nama.ui');
		bard.inject('$controller');
		
		controller = $controller('NamaRatingController');
	});
	
	it('should populate stars', function () {
		
		controller.initialize(5);
		
		expect(controller.stars.length).toEqual(5);
	});
	
	it('should be a full star', function () {
		
		controller.initialize(5);
		controller.value = 2;
		
		var styles = controller.styles(1);
		
		expect(styles['glyphicon']).toBeTruthy();
		expect(styles['glyphicon-star']).toBeTruthy();
		expect(styles['glyphicon-star-empty']).toBeFalsy();
	});
	
	it('should be an empty star', function () {
		
		controller.initialize(5);
		controller.value = 2;
		
		var styles = controller.styles(2);

		expect(styles['glyphicon']).toBeTruthy();
		expect(styles['glyphicon-star']).toBeFalsy();
		expect(styles['glyphicon-star-empty']).toBeTruthy();
		
		tyles = controller.styles(3);

		expect(styles['glyphicon']).toBeTruthy();
		expect(styles['glyphicon-star']).toBeFalsy();
		expect(styles['glyphicon-star-empty']).toBeTruthy();
	});
});