var Rectangle = require("../src/rectangle");

var rectangle;

describe("Rectangle", function() {
  beforeEach(function() {
    rectangle = new Rectangle(4,6, "blue");
  });

  describe("Area", function() {
    it("should be 24 for a rectangle with sides of 4 and 6", function() {
      expect(rectangle.area()).toEqual(24);
    });
  });

  describe("Perimeter", function() {
    it("should be 20 for a square with side lengths 4,6", function() {
      expect(rectangle.perimeter()).toEqual(20);
    });
  });

  describe("Draw", function(){
    it("should describe a shape with 4 sides", function(){
      expect(rectangle.draw()).toEqual("A shape with 4 sides");
    });
  });

  describe("toString", function(){
    it("should report the number of sides and the color of the shape as a string", function(){
      expect(rectangle.toString()).toEqual("[Shape sides:4, color:blue ]")
    });
  });
});
