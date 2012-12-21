describe("string", function(){
	it("The charAt method returns the character at position pos in this string", function(){
		var name = 'Curly';
		expect(name.charAt(0)).to.be('C');
		});
	it("charCodeAt returns an integer representation of the code point value of the character ", function(){
		var name = 'Curly';
		expect(name.charCodeAt(0)).to.be(67); 
		});
	it("concat do just what you suposse it do", function(){
		var s = 'C'.concat('a', 't');
		expect(s).to.be('Cat');
		});
	it("The indexOf method searches for a searchString within a string.", function(){
		var text = 'Mississippi';
		expect(text.indexOf('ss')).to.be(2);
		expect(text.indexOf('ss', 3)).to.be(5);
		expect(text.indexOf('ss', 6)).to.be(-1);
		});
	it("same as indexOf but it searches from the end of the string instead of the front", function(){
		var text = 'Mississippi';
		expect(text.lastIndexOf('ss')).to.be(5);
		expect(text.lastIndexOf('ss', 3)).to.be(2);
		expect(text.lastIndexOf('ss', 6)).to.be(5);
		});
	it("local compare", function(){
		expect('a'.localeCompare('b')).to.be(-1)
		expect('a'.localeCompare('a')).to.be(0)
		expect('b'.localeCompare('a')).to.be(1)
		});
	it("The match method matches a string and a regular expression.  ", function(){
		var text = '<html><body bgcolor=linen><p>' +
		'This is <b>bold<\/b>!<\/p><\/body><\/html>';
		var tags = /[^<>]+|<(\/?)([A-Za-z]+)([^<>]*)>/g;
		var a, i;
		a = text.match(tags);
		expect(a[0]).to.be('<html>');
		expect(a[1]).to.be('<body bgcolor=linen>');
		});
	it("The replace method does a search and replace operation on this string, producing a new string", function(){
		expect('mother_in_law'.replace('_', '-')).to.be('mother-in_law');
		// You can do it better with a regexp (don't forget the g flag)
		expect('mother_in_law'.replace(/_/g, '-')).to.be('mother-in-law');
		});
	it("same as indexOf method, except that it takes a regular expression object instead of a string.", function(){
		var text = 'and in it he says "Any damn fool could';
		expect(text.search(/["']/)).to.be(18); 
		});
	it("The slice method makes a new string by copying a portion of another string.", function(){
		var text = 'and in it he says "Any damn fool could';
		expect(text.slice(18)).to.be('"Any damn fool could');
		expect(text.slice(0, 3)).to.be('and');
		expect(text.slice(-5)).to.be('could');
		expect(text.slice(19, 32)).to.be('Any damn fool');
		});
	it("The split method creates an array of strings by splitting this string into pieces.", function(){
		var digits = '0123456789';
		expect(digits.split('').length).to.be(10);
		expect(digits.split('', 5).length).to.be(5);
		var ip = '192.168.1.0';
		var b = ip.split('.');
		expect(b[0]).to.be('192');
		var c = '|a|b|c|'.split('|');
		expect(c[0]).to.be('');
		expect(c[1]).to.be('a');
		var text = 'last,  first ,middle';
		var d = text.split(/\s*,\s*/);
		expect(d[0]).to.be('last');
		expect(d[1]).to.be('first');
		expect(d[2]).to.be('middle');
		});
	it("substring", function(){
	  /* The substring method is the same as the slice method except 
	  that it doesn't handle the adjustment for negative parameters. 
	  There is no reason to use the substring method. Use slice instead. */
	});
	it("toLocaleLowerCase", function(){
	  /*The toLocaleLowerCase method produces a new string that is made
	   by converting this string to lowercase using the rules for the locale. 
	   This is primarily for the benefit of Turkish because in that language `I'
	   converts to 1, not `i'. */
	});
	it("toLocaleUpperCase", function(){
	  // Same as toLocaleLowerCase
	});
	it("toLowerCase", function(){
	  expect('TOLOWERCASE'.toLowerCase()).to.be('tolowercase');
	});
	it("toUpperCase", function(){
	  expect('touppercase'.toUpperCase()).to.be('TOUPPERCASE');
	});
	it("The String.fromCharCode function produces a string from a series of numbers", function(){
	  expect(String.fromCharCode(67, 97, 116)).to.be('Cat');
	});
	});