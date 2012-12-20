describe("functions", function(){
	beforeEach(function(){
		Function.prototype.method = function (name, func) {
			this.prototype[name] = func;
			return this;
		};
		});
	it("4.12 should show the module behaviour", function(){
		String.method('deentityify', function () {
			var entity = {
				quot: '"',
				lt:   '<',
				gt: '>' 
			};
			return function (  ) {
				return this.replace(/&([^&;]+);/g,
					function (a, b) {
						var r = entity[b];
						return typeof r === 'string' ? r : a;
						}); 
			};
			}());
		expect('&lt;&quot;&gt;'.deentityify()).to.be('<">'); 
		});
	it("4.12 should show the module behavior again", function(){
		var serial_maker = function() {
			var prefix = '';
			var seq = 0;
			return {
				set_prefix: function(p) {
					prefix = p;
					},
				set_seq: function(s) {
					seq = s; 
					},
				gensym: function() {
					var result = prefix + seq;
					seq += 1;
					return result;
				}
			};
		}();
		var seqer = serial_maker;
		seqer.set_prefix('Q');
		seqer.set_seq(1000);
		unique = seqer.gensym();
		expect(unique).to.be('Q1000');
		var unique = seqer.gensym();
		expect(unique).to.be('Q1001');
		});
	it("4.13 should combine cascade and module behavior", function(){
	  var serial_maker = function() {
			var prefix = '';
			var seq = 0;
			return {
				set_prefix: function(p) {
					prefix = p;
					return this;
					},
				set_seq: function(s) {
					seq = s; 
					return this;
					},
				gensym: function() {
					var result = prefix + seq;
					seq += 1;
					return result;
				}
			};
		}();
		var seqer = serial_maker;
		seqer.set_prefix('Q').set_seq(1000);
		var unique = seqer.gensym();
		expect(unique).to.be('Q1000');
	    unique = seqer.gensym();
		expect(unique).to.be('Q1001');
	});
	it("4.14 should show the curry behaviour", function(){
		Function.method('curry', function () {
			var slice = Array.prototype.slice,
			args = slice.apply(arguments),
			that = this;
			return function () {
				return that.apply(null, args.concat(slice.apply(arguments)));
			};
		});
		var add = function(a,b){
			return a + b;
		}
		var add1 = add.curry(2);
		expect(add1(6)).to.be(8);    
		});
	it("4.15 should show memoizacion behaviour", function(){
		var numberOfCalls = 0;
		var fibonacci = function (n) {
			numberOfCalls++;
			return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
		};
		for (var i = 0; i <= 10; i += 1) {
			fibonacci(i);
		}
		expect(numberOfCalls).to.be(453);
		var numberOfCalls = 0;
		var fibonacciMemo = function () {			
			var memo = [0, 1];
			var fib = function (n) {
				numberOfCalls++;
				var result = memo[n];
				if (typeof result !== 'number') {
					result = fib(n - 1) + fib(n - 2);
					memo[n] = result;
				}
				return result;
			};
			return fib;
			}();
		for (var i = 0; i <= 10; i += 1) {
			fibonacciMemo(i);
		}
		expect(numberOfCalls).to.be(29);
		});
	it("should show the very same as the previous one but with a memoizer function", function(){
		var numberOfCalls = 0;
		var memoizer = function (memo, fundamental) {
			var shell = function (n) {
				numberOfCalls++;
				var result = memo[n];
				if (typeof result !== 'number') {
					result = fundamental(shell, n);
					memo[n] = result;
				}
				return result;
			};
			return shell;
		};
		var fibonacci = memoizer([0, 1], function (shell, n) {
			
			return shell(n - 1) + shell(n - 2);
			});
		for (var i = 0; i <= 10; i += 1) {
			fibonacci(i);
		}
		expect(numberOfCalls).to.be(29);
		});
	});