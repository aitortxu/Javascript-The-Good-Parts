describe("Number methods", function(){
  it("toExponential method converts this number to a string in the exponential form", function(){
    expect(Math.PI.toExponential(2)).to.be('3.14e+0');
    expect(Math.PI.toExponential(7)).to.be('3.1415927e+0');
  });
  it("toFixed method converts this number to a string in the decimal form", function(){
    expect(Math.PI.toFixed(2)).to.be('3.14');
    expect(Math.PI.toFixed(7)).to.be('3.1415927');
  });
  it(" toPrecision method converts this number to a string in the decimal form", function(){
    expect(Math.PI.toPrecision(2)).to.be('3.1');
    expect(Math.PI.toPrecision(7)).to.be('3.141593');
  });
  it("The toString method converts this number to a string.", function(){
    // the optional radix parameter controls radix, or base.
    expect(Math.PI.toString()).to.be('3.141592653589793');
    expect(Math.PI.toString(2)).to.be('11.001001000011111101101010100010001000010110100011');
  });
  
});