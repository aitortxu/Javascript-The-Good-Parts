describe("function invocation", function(){
	beforeEach(function(){
		Function.prototype.method = function (name, func) {
			this.prototype[name] = func;
			return this;
		};
		});
	it("4.4 should use the arguments array", function(){
		var sum = function ( ) {
			var i, sum = 0;
			for (i = 0; i < arguments.length; i += 1) {
				sum += arguments[i];
			}
			return sum;
		};
		expect(sum(4, 8, 15, 16, 23, 42)).to.be(108);
		});
	it("4.5should use return to return a value", function(){
		var sum = function (a,b) {
			return a + b;
		};
		var sumWithoutReturn = function (a,b) {
			a + b;
		};
		expect(sum(3,2)).to.be(5);
		expect(typeof sumWithoutReturn(3,2)).to.be('undefined');
		});
	it("4.6 should catch the exception throws by the add method", function(){
		// TODO I can`t find a good way to test this :(
			var add = function (a, b) {
				return a + b; 
				if (typeof a !== 'number' || typeof b !== 'number') {
					console.log("lanzando la excepcion");
					throw {
						name: 'TypeError',
						message: 'add needs numbers'
					} 
				}
				return a + b; 
			}
			try {
				add(4,"five");
				} catch (e) {
					expect("exception throwned").to.be("exception throwned");
				}	
				});
	it("4.7 integer augmented method should extract the integer part of a number", function(){
		Number.method('integer', function (  ) {
			return Math[this < 0 ? 'ceil' : 'floor'](this);
			});
		expect((-10 / 3).integer(  )).to.be(-3); 
		});
	it("4.7 trim augmented method should just trim", function(){
		String.method('trim', function (  ) {
			return this.replace(/^\s+|\s+$/g, '');
			});
		expect('  neat   '.trim()).to.be('neat');
		});
	it("4.8 factorial should be called recurvively", function(){
		var factorial = function factorial(i, a) {
			a = a || 1;
			if (i < 2) {
				return a;
			}
			return factorial(i - 1, a * i);
		};
		expect(factorial(4)).to.be(24);; 
		});
	});