var Shape = require("../src/shape");
console.log(Shape);

var shape;
shape = new Shape(1,"red");
console.log(shape.color);

describe("Shape", function() {
  beforeEach(function() {
    shape = new Shape(1, "red");
  });

  describe("Area", function() {
    xit("should should be 0 for this abstract shape", function() {
      expect(shape.area()).toEqual(0);
    });
  });

  describe("Draw", function(){
  	xit("should describe a shape with the passed number of sides", function() {
  		expect(shape.draw()).toEqual("A shape with 1 sides");
  	});
  });

  describe("toString", function(){
  	xit("should report the number of side and the color of the shape as a string", function(){
  		expect(shape.toString()).toEqual("[Shape sides:1, color:red ]")
  	});
  });
  
  describe("getRGB", function(){
  	xit("should return the rgb value of the color of the shape, as a string", function(){
  		expect(shape.getRGB()).toEqual("rgb(255,0,0)")
  	});	
  });
});
