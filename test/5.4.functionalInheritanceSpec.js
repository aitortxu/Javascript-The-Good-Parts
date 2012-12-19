describe("functional inheritance", function(){
	it("should ...", function(){
	  // Add your behavior testing code here
	  var mammal = function (spec) {
	  	var that = {};
	  	that.get_name = function (  ) {
	  		return spec.name;
	  	};
	  	that.says = function (  ) {
	  		return spec.saying || '';
	  	};
	  	return that;
	  };
	  var myMammal = mammal({name: 'Herb'});
	  expect(myMammal.says()).to.be(''); 
	  expect(myMammal.get_name()).to.be('Herb');
	  //more properties for cat
	  var cat = function (spec) {
	  	spec.saying = spec.saying || 'meow';
	  	var that = mammal(spec);
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
	  	that.get_name = function () {
	  		return that.says(  ) + ' ' + spec.name +
	  		' ' + that.says(  );
	  	};
	  	return that;
	  };
	  var myCat = cat({name: 'Henrietta'});
	  expect(myCat.says()).to.be('meow'); 
	  expect(myCat.purr(5)).to.be('r-r-r-r-r');
	  expect(myCat.get_name()).to.be('meow Henrietta meow');

	  //yet more for coolcat

	  Function.prototype.method = function (name, func) {
	  	this.prototype[name] = func;
	  	return this;
	  };

	  Object.method('superior', function (name) {
	  	var that = this,
	  	method = that[name];
	  	return function () {
	  		return method.apply(that, arguments);
	  	};
	  	});

	  var coolcat = function (spec) {
	  	var that = cat(spec),
	  	super_get_name = that.superior('get_name');
	  	that.get_name = function (n) {
	  		return 'like ' + super_get_name(  ) + ' baby';
	  	};
	  	return that;
	  };
	  var myCoolCat = coolcat({name: 'Bix'});
	  expect(myCoolCat.get_name()).to.be('like meow Bix meow baby');

	  });
});