expect = require("expect.js"),
pseudoclassicalInheritance = require("../src/pseudoclassicalInheritance.js"),
sinon = require("sinon");

describe("pseudoclassical Inheritance", function () {

      var Mammal ;
      var HENRIETTA = 'Henrietta';

      beforeEach(function () {
        Mammal = function (name) {
          this.name = name;
        };

        Mammal.prototype.getName = function(){
          return this.name;
        };

        Mammal.prototype.says = function(){
          return this.saying()|| '';
        };
      });

      it("just trying the inherintance", function () {
        var myCat = new Mammal(HENRIETTA);
        expect(myCat.getName()).to.be(HENRIETTA);
      });

      it("should say meow if its a mammal HENRIETTA", function(){
        var Cat = function(name){
          this.name = name;
          this.saying = function(){
            return 'meow' ;
          }
        }
        Cat.prototype = new Mammal();

        Cat.prototype.purr = function (n) {
          var i, s = '';
          for (i = 0; i < n; i += 1) {
            if (s) {
              s += '-'; }
              s += 'r'; }
              2
              return s; 
          };
          Cat.prototype.get_name = function (  ) {
            return this.says() + ' ' + this.name + ' ' + this.says();
          };
          var myCat = new Cat('Henrietta');
          expect(myCat.says()).to.be('meow'); 
          expect(myCat.purr(5)).to.be('r-r-r-r-r');
          expect(myCat.get_name()).to.be('meow Henrietta meow');
      });
        it.skip("should look less alien with inherits and method", function(){
          //And it doesn't work
          Function.method('inherits', function (Parent) {
              this.prototype = new Parent(  );
              return this;
          });
          var Cat = function (name) {
            this.name = name;
            this.saying = 'meow';
            }.
            inherits(Mammal).
            method('purr', function (n) {
              var i, s = '';
              for (i = 0; i < n; i += 1) {
                if (s) {
                  s += '-';
                }
                s += 'r'; }
                return s; }).
            method('get_name', function (  ) {
              return this.says(  ) + ' ' + this.name +
              ' ' + this.says(  );
              });
        });
    }
);