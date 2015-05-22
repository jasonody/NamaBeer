describe('oauth', function () {
	
	var url;
	var formEncodedData = 'data=data&moredata=data';
	
	beforeEach(function () {
		
		bard.appModule('nama.common');
		bard.inject('oauth', '$httpBackend', 'settings', 'formEncoding');
		
		url = settings.serverPath + '/token';
		
		spyOn(formEncoding, 'encode').and.returnValue(formEncodedData);
	});
	
	afterEach(function () {
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});
	
	it('should authenticate', function () {
		
		var username = 'user';
		var password = 'pw';
				
		$httpBackend
			.expect('POST', url)
			.respond(function (method, url, data, headers) {

				expect(headers['Content-Type']).toEqual('application/x-www-form-urlencoded');
				expect(data).toEqual(formEncodedData);

				return [201, {}, {}];
			});
		
		oauth.login(username, password);
		
		$httpBackend.flush();
		
		expect(formEncoding.encode).toHaveBeenCalledWith({
			username: username, 
			password: password,
			grant_type: 'password'
		});
	});
});