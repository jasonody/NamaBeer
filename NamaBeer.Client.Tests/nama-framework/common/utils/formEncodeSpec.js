describe('FormEncode', function () {
	
	beforeEach(function () {
		
		bard.appModule('nama.common');
		bard.inject('formEncode');
	});
	
	it('should form encode a JavaScript literal', function () {
		
		var data = { a: '123', b: '456' };
		
		var encoded = formEncode(data);
		expect(encoded).toEqual('a=123&b=456');
	});
	
	it('should replace spaces with +', function () {
		
		var data = { a: 'some text', b: 'some more text' };
		
		var encoded = formEncode(data);
		expect(encoded).toEqual('a=some+text&b=some+more+text')
	});
	
	it('should encode special characters', function () {
		
		var data = { a: '4>than1', b: '@some&'};
		
		var encoded = formEncode(data);
		expect(encoded).toEqual('a=4%3Ethan1&b=%40some%26');
	});
});