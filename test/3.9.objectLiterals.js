describe("notation of object literals", function(){
	it("should use global variables for app to avoid crashes", function(){
		var MYAPP = {};
		var ANOTHERAPP = {};
		MYAPP.stooge = {
			"first-name": "Joe",
			"last-name": "Howard"
		};
		ANOTHERAPP.stooge = {
			"first-name": "NotJoe",
			"last-name": "NotHoward"
		};
		expect(MYAPP.stooge["first-name"]).to.be('Joe');
		expect(MYAPP.stooge["first-name"]).not.to.be('NotJoe');
		});
	});