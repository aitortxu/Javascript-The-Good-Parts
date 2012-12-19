describe("prototypal inheritance", function(){
	it("just using an object literal", function(){
		if (typeof Object.beget !== 'function') {
			Object.beget = function (o) {
				var F = function () {};
				F.prototype = o;
				return new F();
			}; 
		}
		var myMammal = {
			name: 'Herb the mammal',
			getName : function(){
				return this.name;
				},
				says : function(){
					return 'meow';
				}
			}
			
		var myCat = Object.beget(myMammal);
		myCat.name = 'Henrietta';
		myCat.saying = 'meow';
		myCat.purr = function (n) {
			var i, s = '';
			for (i = 0; i < n; i += 1) {
				if (s) {
					s += '-';
				}
				s += 'r'; 
			}
			return s; 
		};
		myCat.get_name = function (  ) {
			return this.says() + ' ' + this.name + ' ' + this.says();
		};
		expect(myCat.says()).to.be('meow'); 
		expect(myCat.purr(5)).to.be('r-r-r-r-r');
		expect(myCat.get_name()).to.be('meow Henrietta meow');
		});
	});