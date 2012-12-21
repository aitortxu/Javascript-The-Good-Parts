describe("array methods", function(){
	it("concat", function(){
		var a = ['a', 'b', 'c'];
		var b = ['x', 'y', 'z'];
		expect(a.concat(b, true).length).to.be(7);
		expect(a.concat(b, true)[6]).to.be(true);
		});
	it("join should make an string from an array", function(){
		var a = ['a', 'b', 'c'];
		expect(a.join('-')).to.be('a-b-c'); 
		});
	it("you can handle an array as a stack with pop and push", function(){
		var a = ['a', 'b', 'c'];
		expect(a.length).to.be(3);  
		expect(a.pop()).to.be('c');
		expect(a.length).to.be(2);  
		a.push('d');
		expect(a[2]).to.be('d');
		expect(a.length).to.be(3);  
		});
	it("reverse should... jut reverse the array", function(){
		var a = ['a', 'b', 'c'];
		var b = a.reverse();
		expect(a[0]).to.be('c');
       //Both arrays have changed
       expect(a).to.be(b);
       });
	it("shift should remove the first itme of an array", function(){
		var a = ['a', 'b', 'c'];
		var c = a.shift();
		expect(c).to.be('a');
		expect(a.length).to.be(2);   
		});
	it("slice should copy a part of the array", function(){
		var a = ['a', 'b', 'c'];
		expect(a.slice(0, 1)[0]).to.be('a');
		expect(a.slice(0, 1).length).to.be(1);
		expect(a.slice(1)[0]).to.be('b');
		expect(a.slice(1).length).to.be(2);
		expect(a.slice(1,2)[0]).to.be('b');
		expect(a.slice(1,2).length).to.be(1);
		});
	it("sort should sort strings ok", function(){
		var strings = ['dd', 'aa', 'vv', 'bb'];
		strings.sort();
		expect(strings[0]).to.be('aa');
		});
	it("sort should order numbers incorrctly, need a function", function(){
		var n = [4, 8, 15, 16, 23, 42];
		n.sort();
		expect(n[0]).to.be(15);
		n.sort(function (a, b) {
			return a - b;
			});
		expect(n[0]).to.be(4);
		});
	it("but last one doesn`t work with strings", function(){
		var strings = ['dd', 'aa', 'vv', 'bb'];
		strings.sort(function (a, b) {
			return a - b;
			});
		expect(strings[0]).to.be('dd');	});
	it("to sort strings and number you need something else ", function(){
		var m = ['aa', 'bb', 'a', 4, 8, 15, 16, 23, 42];
		m.sort(function (a, b) {
			if (a === b) {
				return 0;
			}
			if (typeof a === typeof b) {
				return a < b ? -1 : 1;
			}
			return typeof a < typeof b ? -1 : 1;
			})	  
		expect(m[0]).to.be(4);
		});
	it("sorting objects", function(){
		var by = function (name) {
			return function (o, p) {
				var a, b;
				if (typeof o === 'object' && typeof p === 'object' && o && p) {
					a = o[name];
					b = p[name];
					if (a === b) {
						return 0; 
					}
					if (typeof a === typeof b) {
						return a < b ? -1 : 1;
					}
					return typeof a < typeof b ? -1 : 1;
				} 
				else {
					throw {
						name: 'Error',
						message: 'Expected an object when sorting by ' + name
					};
				}
			};
		};

		var s = [
		{first: 'Moe'  , last: 'DeRita'},
		{first: 'Joe'  , last: 'Besser'},
		{first: 'Shemp', last: 'Howard'},
		{first: 'Larry', last: 'Fine'},
		{first: 'Curly', last: 'Howard'}];
		s.sort(by('first'));
		expect(s[0].first).to.be("Curly");
		//s.sort(by('first')).sort(by('last'));
		//console.log(s);
		});
	it("splice removes elements from an array, replacing them with new item ", function(){
		var a = ['a', 'b', 'c'];
		var r = a.splice(1, 1, 'ache', 'bug');
		expect(a.length).to.be(4);
		expect(a[0]).to.be('a');
		expect(a[1]).to.be('ache');
		expect(a[2]).to.be('bug');
		expect(a[3]).to.be('c');
		expect(r.length).to.be(1);
		expect(r[0]).to.be('b');
		});
	it(" unshift method is like the push method except that it shoves the item ", function(){
		var a = ['a', 'b', 'c'];
		var r = a.unshift('?', '@');
		expect(a.length).to.be(5);
		expect(a[0]).to.be('?');
		expect(a[1]).to.be('@');
		expect(a[2]).to.be('a');
		expect(a[3]).to.be('b');
		expect(r).to.be(5);
       });
	});