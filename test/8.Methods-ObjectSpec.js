describe("object", function(){
	it("hasOwnProperty method returns true if the object contains a property having the name", function(){
		var a = {member: true};
		var b = Object.beget(a);
		expect(a.hasOwnProperty('member')).to.be(true);
		expect(b.hasOwnProperty('member')).to.be(false);
		});
	});