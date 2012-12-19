describe("notation of object literals", function(){

	var empty_object, stooge, flight;
	beforeEach(function(){
		empty_object = {};
		stooge = {
			first_name: "Jerome",
			"last-name": "Howard",
		};
		flight = {
			airline: "Oceanic",
			number: 815,
			status:"delayed",
			departure: {
				IATA: "SYD",
				time: "2004-09-22 14:55",
				city: "Sydney"
				} , 
				arrival: {
					IATA: "LAX",
					time: "2004-09-23 10:42",
					city: "Los Angeles"
				}
			};

			});
	it("3.6 should determine the type of a property", function(){
		expect(typeof flight.number).to.be('number');
		expect(typeof flight.status).to.be('string');
		expect(typeof flight.arrival).to.be('object');
		expect(typeof flight.manifest).to.be('undefined');
		//Take care, any property in the prototype chain has a value
		expect(typeof flight.toString).to.be('function');
		});
	it("3.6should return false if the property is from prototype", function(){
		expect(flight.hasOwnProperty('number')).to.be(true);
		expect(flight.hasOwnProperty('constructor')).to.be(false);
		});
	it("3.7 should enumerate the properties in a loop", function(){
		var name;
		var numberOfProperties = 0;
		for (name in stooge) {
			if (typeof stooge[name] !== 'function') {
				numberOfProperties ++;
			} 
		}
		expect(numberOfProperties).to.be(2);
		});
	it("3.7 should put them in an array to enssure the order", function(){
		var i;
		var propertiesInString = '';
		var properties = [
		'first_name',
		'last-name'
		];
		for (i = 0; i < properties.length; i += 1) {
			propertiesInString += stooge[properties[i]] + '|';
		} 
		expect(propertiesInString).to.be('Jerome|Howard|');
		});
	it("3.8 should retrieve the prototype linkage when deleting a property", function(){
	  if (typeof Object.beget !== 'function') {
			Object.beget = function (o) {
				var F = function () {};
				F.prototype = o;
				return new F();
			}; 
		}
		var anotherStooge = Object.beget(stooge);
		anotherStooge.first_name = 'Joe';
		expect(anotherStooge.first_name).to.be('Joe');
		delete anotherStooge.first_name;
		expect(anotherStooge.first_name).to.be('Jerome');
	});
	});