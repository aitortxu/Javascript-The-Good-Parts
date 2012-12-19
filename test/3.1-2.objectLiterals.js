describe("notation of object literals", function(){

	var empty_object, stooge, flight;
	beforeEach(function(){
		empty_object;
		stooge = {
			first_name: "Jerome",
			"last-name": "Howard",
			nickName: "Curly"
		};
		flight = {
			airline: "Oceanic",
			number: 815,
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
	it("should retrieve the values even with -", function(){
		expect(typeof empty_object).to.be('undefined');
		expect(stooge.first_name).to.be("Jerome");
	//Not working sintax -> expect(stooge.last-name).to.be("Jerome");
	expect(stooge["last-name"]).to.be("Howard");
	});
	it("should use the || operator to fill the default vallues", function(){
		var middle = stooge["middle-name"] || "(none)";
		expect(middle).to.be("(none)");		
		});
	it("objects literal can be nested", function(){
		expect(flight.airline).to.be("Oceanic");
		expect(flight.departure.IATA).to.be("SYD");
		expect(flight.arrival.IATA).to.be("LAX");

		});
	it("should use the && operator to avoid TypeError", function(){
		// Attempting to retrieve values from undefined will throw a 
		// TypeError exception. This can be guarded against with 
		// the && operator
		//expect(flight.equipment.model).to.be("wadus");
		var model = flight.equipment && flight.equipment.model;
		expect(typeof model).to.be('undefined');
		});
	it("3.3 should update the value; if it doesn`t exist it's augmented", function(){
		stooge.first_name = 'Fred';
		expect(stooge.first_name).to.be("Fred");
		stooge.notExistingProp = 'wadus';
		expect(stooge.notExistingProp).to.be('wadus');
		});
	it("3.4 should be passed by reference", function(){
		var anotherStooge = stooge;
		expect(stooge.nickName).to.be('Curly');
		anotherStooge.nickName ='anotherNickname';
		expect(stooge.nickName).to.be('anotherNickname');
		});
	it("3.5should create a new object via prototype", function(){
		if (typeof Object.beget !== 'function') {
			Object.beget = function (o) {
				var F = function () {};
				F.prototype = o;
				return new F();
			}; 
		}
		var anotherStooge = Object.beget(stooge);
		expect(stooge.nickName).to.be('Curly');
		anotherStooge.nickName ='anotherNickname';
		expect(stooge.nickName).to.be('Curly');
		});
	});