describe("arrays behaviour", function(){
	var numbers;
	beforeEach(function(){
		numbers = [
		'zero', 'one', 'two', 'three', 'four',
		'five', 'six', 'seven', 'eight', 'nine'
		];
		});
	it("6.1 Array literals", function(){
		var empty = [];
		
		expect(typeof empty[1]).to.be('undefined');
		expect(numbers[1]).to.be('one');
		expect(empty.length).to.be(0);
		expect(numbers.length).to.be(10);
		});
	it("6.2 length property", function(){
		var myArray = [];
		expect(myArray.length).to.be(0); 
		myArray[1000000] = true;
		expect(myArray.length).to.be(1000001); 
		var ORIGINAL_LENGTH = 2
		myArray.length = ORIGINAL_LENGTH;
		expect(myArray.length).to.be(ORIGINAL_LENGTH);
		expect(typeof myArray[1000000]).to.be('undefined');
		myArray[myArray.length] = 'aNumber';
		expect(myArray.length).to.be(ORIGINAL_LENGTH +1);
		// Use push sometimes is more convenient
		myArray.push('anotherNumber');
		expect(myArray.length).to.be(ORIGINAL_LENGTH +2);
		});
	it("6.3 Delete leaves a hole in the array", function(){
		expect(numbers.length).to.be(10);
		delete numbers[2];
		expect(numbers.length).to.be(10);
		expect(typeof numbers[2]).to.be('undefined');
		});
	it("6.3 splice leaves no hole in the array", function(){
		expect(numbers.length).to.be(10);
		numbers.splice(2, 1);
		expect(numbers.length).to.be(9);
		expect( numbers[2]).to.be('three');
		});
	it("6.4 Enumeration", function(){
		var i;
		var numbersString = '';
		for (i = 0; i < numbers.length; i += 1) {
			numbersString += numbers[i] + '|';
		}
		expect(numbersString).to.be('zero|one|two|three|four|five|six|seven|eight|nine|');
		});
	it("6.5 Confusion between array and objects", function(){
		var is_array = function (value) {
			return value &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			typeof value.splice === 'function' &&
			!(value.propertyIsEnumerable('length'));
		};
		//Not very helpful
		expect(typeof numbers).to.be('object');
		expect(is_array(numbers)).to.be(true);
		expect(is_array('a String')).to.be(false);
		var theFunction = function(){return 'foo'};
		expect(is_array('theFunction')).to.be(false);
		var theObject = {property:'pp'};
		expect(is_array('theObject')).to.be(false);
		});
	it("6.6 Array methods", function(){
		Array.method('reduce', function (f, value) {
			var i;
			for (i = 0; i < this.length; i += 1) {
				value = f(this[i], value);
			}
			return value;
			});
		var add = function (a, b) {
			return a + b;
		};
		var data = [4, 8, 15, 16, 23, 42];
		expect(data.reduce(add,0)).to.be(108); 
		});
	it("6.7 Dimensions: Inicializating the array (undefined by default)", function(){
		Array.dim = function (dimension, initial) {
			var a = [], i;
			for (i = 0; i < dimension; i += 1) {
				a[i] = initial;
			}
			return a;
		}
		var i, myArray = Array.dim(10, 0);
		for (i = 0; i < 10; i += 1) {
			expect(myArray[i]).to.be(0);
		}
		});
	it("6.7 Dimensions: you can have an array of arrays ", function(){
		var matrix = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8] ];
		expect(matrix[2][1]).to.be(7);
		});
	it("6.7 Dimensions: you can initialize a matrix too", function(){
		Array.matrix = function (m, n, initial) {
			var a, i, j, mat = [];
			for (i = 0; i < m; i += 1) {
				a = [];
				for (j = 0; j < n; j += 1) {
					a[j] = 0;
				}
				mat[i] = a;
			}
			return mat; 
		}
		var myMatrix = Array.matrix(4, 4, 0);
		expect(myMatrix[3][3]).to.be(0);    
		});
	});