describe("parts inheritance", function(){
	it("should compose an object ot of sets of parts", function(){
		var basicMammal = function (name) {
			this.name = name;
		};
		var beMammal = function(that){
			that.getName = function(){
				return that.name;
			}
			that.says = function(){
				return 'meow';
			}
		}
		var myCat = new basicMammal('Henrietta');
		beMammal(myCat);
		expect(myCat.says()).to.be('meow'); 

		var beCat = function(that){
			that.purr = function (n) {
				var i, s = '';
				for (i = 0; i < n; i += 1) {
					if (s) {
						s += '-';
					}
					s += 'r'; 
				}
				return s; 
			};
			that.get_name = function (  ) {
				return this.says() + ' ' + this.name + ' ' + this.says();
			};
		}
		beCat(myCat);
		expect(myCat.purr(5)).to.be('r-r-r-r-r');
		expect(myCat.get_name()).to.be('meow Henrietta meow');
		});
	});