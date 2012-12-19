var pseudoclassical = (function (nameSpace, undefined) {
  nameSpace = nameSpace || {};

  var Mammal = function (name) {
    this.name = name;
  };

  Mammal.prototype.getName = function(){
    return this.name;
  };

  Mammal.prototype.says = function(){
    return this.saying()|| '';
  };
  
  nameSpace.Mammal = Mammal;

  if (typeof module !== 'undefined' && 'exports' in module) {
    module.exports = nameSpace;
  }
  return nameSpace;

}(pseudoclassical));
