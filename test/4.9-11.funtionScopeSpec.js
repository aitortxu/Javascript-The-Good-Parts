describe("function invocation", function(){
	it("4.9 should show the function scope", function(){
		var foo = function () {
			var a = 3, b = 5;
			var bar = function () {
				var b = 7, c = 11;
				expect(a).to.be(3);
				expect(b).to.be(7);
				expect(c).to.be(11);
				a += b + c;
				expect(a).to.be(21);
				expect(b).to.be(7);
				expect(c).to.be(11);
			};
			expect(a).to.be(3);
			expect(b).to.be(5);
			expect(typeof c).to.be('undefined');
			bar();
			expect(a).to.be(21);
			expect(b).to.be(5);
			expect(typeof c).to.be('undefined');
		};
		foo();
		});
	it("4.10 should show the closure behavior", function(){
		var myObject = function () {
			var value = 0;
			return {
				increment: function (inc) {
					value += typeof inc === 'number' ? inc : 1;
					},
					getValue: function (  ) {
						return value;
					} 
				}
				}();	
		expect(myObject.getValue()).to.be(0);	
		myObject.increment(2);
		expect(myObject.getValue()).to.be(2);	
		});
	it("4.10 status should remain private, only accessed by get Status", function(){
		var quo = function (status) {
			return {
				get_status: function () {
					return status;
				} 
			};
		};
		var myQuo = quo("amazed");
		expect(myQuo.get_status()).to.be('amazed');
		expect(typeof myQuo.status).to.be('undefined');
		});
	it.skip("4.11 should the callback behavior", function(){
	  // It doesn´t seem to be working... I'm probably missing something
	  var callbackDone = false;
	  var callback = function(){
	  	callbackDone = true;
	  	console.log(' callback done');
	  }
	  var long_call = function(callback) {
	  	setTimeout(function() {
	  		console.log('long call done');
	  	},10000);
	  	callback;
	  }
	  long_call(callback);
	  console.log('next to long call done')
	  expect(callbackDone).to.be(false);
	  setTimeout(function() {
	  		console.log('waiting for complete...');
	  	},10000);

	});
	});				