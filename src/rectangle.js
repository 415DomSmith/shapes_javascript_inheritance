var Shape = require("./shape");

// Add the constructor for rectangle and the methods that
// need to be overwritten.  Keep in mind that a rectangle
// has more than just 1 side length.
function Rectangle(sideLength, sideWidth, color) { 
	Shape.call(this, 4, color);
  this.sideLength = sideLength;
  this.sideWidth = sideWidth;
}

Rectangle.prototype = Object.create(Shape.prototype)
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function(){
	return this.sideLength * this.sideWidth;
}

Rectangle.prototype.perimeter = function(){
	return (this.sideLength + this.sideWidth) * 2;
}

module.exports = Rectangle;
