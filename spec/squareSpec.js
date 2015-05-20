var Square = require("../src/square");

var square;

describe("Square", function() {
  beforeEach(function() {
    square = new Square(2, "red");
  });

  describe("Area", function() {
    it("should be 4 for a square", function() {
      expect(square.area()).toEqual(4);
    });
  });

  describe("Perimeter", function() {
    it("should be 8 for a square with side length 2", function() {
      expect(square.perimeter()).toEqual(8);
    });
  });

  describe("Draw", function(){
    it("should describe a shape with 4 sides", function(){
      expect(square.draw()).toEqual("A shape with 4 sides");
    });
  });

  describe("toString", function(){
    it("should report the number of sides and the color of the shape as a string", function(){
      expect(square.toString()).toEqual("[Shape sides:4, color:red ]")
    });
  });
});