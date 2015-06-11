describe('user', function() {
	
	beforeEach(function () {
		
		bard.appModule('nama.common');
	});
	
	describe('initialize', function () {
		
		beforeEach(function () {
			
			bard.inject('browserLocalStorage');
		});
		
		it('should load profile from local storage', function () {

			var localProfile = {
				username: 'username',
				token: 'token',
				tokenExpiration: new Date()
			};
			spyOn(browserLocalStorage, 'get').and.returnValue(localProfile);
			
			bard.inject('user');
			
			expect(user.profile.username).toEqual(localProfile.username);
			expect(user.profile.token).toEqual(localProfile.token);
			expect(user.profile.tokenExpiration).toEqual(localProfile.tokenExpiration);
		});
		
		it('should use default profile when local storage is empty', function () {
			
			spyOn(browserLocalStorage, 'get').and.returnValue(undefined);
			
			bard.inject('user');
			
			expect(user.profile.username).toEqual('');
			expect(user.profile.token).toEqual('');
			expect(user.profile.tokenExpiration.toString()).toEqual(new Date().toString());
		});
	});
	
	describe('login', function () {
		
		beforeEach(function() {
			
			bard.inject('user', 'oauth', '$q', '$rootScope');
		});
		
		it('should set profile and save to local storage if successful', function () {
			
			var response = {
				data: {
					access_token: 'token',
					'.expires': new Date()
				}
			};
			spyOn(oauth, 'login').and.returnValue($q.when(response));
			
			var username = 'user';
			var password = 'pw';
			user.login(username, password);
			$rootScope.$digest();
			
			expect(oauth.login).toHaveBeenCalledWith(username, password);
			expect(user.profile.token).toEqual(response.data.access_token);
			expect(user.profile.tokenExpiration).toEqual(response.data['.expires']);
		});
			
		it('should return error message if unsuccessful', function () {
			
			var response = {
				status: 400,
				data: {
					error_description: 'Error message'
				}
			};
			spyOn(oauth, 'login').and.returnValue($q.reject(response));
			
			user.login('username', 'password')
				.then(function (message) {
					
					expect(message).toEqual(response.data.error_description);
				});
			$rootScope.$digest();
		});
	});
	
	describe('logout', function () {
		
		beforeEach(function() {
			
			bard.inject('user', 'browserLocalStorage');
		});
		
		it('should remove profile from local storage', function () {
			
			spyOn(browserLocalStorage, 'remove');
			
			user.logout();
			
			expect(browserLocalStorage.remove).toHaveBeenCalled();
			expect(user.profile.username).toEqual('');
			expect(user.profile.token).toEqual('');
			expect(user.profile.tokenExpiration.toString()).toEqual(new Date().toString());
		});
	});
});