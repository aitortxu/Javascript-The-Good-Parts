describe("fucntion invocation patterns", function(){
	var myObject;
	var add = function (a, b) { 
				return a + b;
			};
	beforeEach(function(){
		myObject = {
			value: 0,
			increment: function (inc) {
				this.value += typeof inc === 'number' ? inc : 1;
			} 
		};
		});
	it("4.3.1 should use the method invocation pattern", function(){
		myObject.increment( );
		expect(myObject.value).to.be(1);
		myObject.increment(2);
		expect(myObject.value).to.be(3);;
		});
	it("4.3.2 should use the function invocation pattern", function(){
		 myObject.double = function () {
			var that = this;// Workaround.
			
			var helper = function () {
				that.value = add(that.value, that.value)
			};
	    	helper();    // Invoke helper as a function.
	    };
		// Invoke double as a method.
		myObject.value = 3;
		myObject.double();
		expect(myObject.value).to.be(6);
		});
	it("should use constructor invocation pattern", function(){
		/**** NOT RECOMMENDER ******/
		var Quo = function (string) {
			this.status = string;
		};
		Quo.prototype.get_status = function (  ) {
			return this.status;
		};
		var myQuo = new Quo("confused");
		expect(myQuo.get_status()).to.be('confused'); 
		});
	it("should use apply invocation pattern", function(){
		var array = [3, 4];
		expect(add.apply(null, array)).to.be(7);
		// Make an object with a status member.
		var statusObject = {
			status: 'A-OK'
		};
		// statusObject does not inherit from Quo.prototype,
		// but we can invoke the get_status method on
		// statusObject even though statusObject does not have
		// a get_status method.
		var Quo = function (string) {
			this.status = string;
		};
		Quo.prototype.get_status = function (  ) {
			return this.status;
		};
		var status = Quo.prototype.get_status.apply(statusObject);
		expect(status).to.be('A-OK');
		var myQuo = new Quo("confused again");
		status = myQuo.get_status.apply(myQuo,statusObject);
		expect(status).to.be('confused again'); 
		});
	});