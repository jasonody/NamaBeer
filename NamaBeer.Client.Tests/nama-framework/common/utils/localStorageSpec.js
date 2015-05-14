describe('localStorage', function () {
	
	beforeEach(function () {
		
		bard.appModule('nama.common');
		bard.inject('browserLocalStorage', '$window');
	});
	
	it('should add item to local storage', function () {
		
		var key = 'key';
		var data = { data: 'data' };
		spyOn($window.localStorage, ['setItem']);
		
		browserLocalStorage.add(key, data);
		expect($window.localStorage.setItem).toHaveBeenCalled();
		var args = $window.localStorage.setItem.calls.argsFor(0);
		expect(args[0]).toEqual(key);
		expect(args[1]).toEqual(angular.toJson(data));
	});
	
	it('should get item from local storage', function () {
		
		var key = 'key';
		spyOn($window.localStorage, ['getItem']);
		
		browserLocalStorage.get(key);
		expect($window.localStorage.getItem).toHaveBeenCalled();
		var args = $window.localStorage.getItem.calls.argsFor(0);
		expect(args[0]).toEqual(key);
	});
	
	it('should remove item from local storage', function () {
		
		var key = 'key';
		spyOn($window.localStorage, ['removeItem']);
		
		browserLocalStorage.remove(key);
			expect($window.localStorage.removeItem).toHaveBeenCalled();
		var args = $window.localStorage.removeItem.calls.argsFor(0);
		expect(args[0]).toEqual(key);
	});
});