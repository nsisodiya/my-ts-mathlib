const { calRectangleArea } = require('my-ts-mathlib');
// const calRectangleArea = require('my-ts-mathlib/es/calRectangleArea');

var rect1 = { side1: '3', side2: '4' };
var rect2 = { side1: 3, side2: 4 };

console.log(
  'This may give compile error. Area of Rect(3,4) =  ',
  calRectangleArea(rect1)
);

console.log('Rectangle with side 3, 4 has area = ', calRectangleArea(rect2));
