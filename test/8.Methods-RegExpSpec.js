describe("regexp", function(){
  it.skip("exec", function(){
    
  });
  it("regexp matches the string, it returns true ; otherwise, it returns false", function(){
    expect(/&.+;/.test('frank &amp; beans')).to.be(true);
    expect(/&.+;/.test('shit')).to.be(false);
  });
});