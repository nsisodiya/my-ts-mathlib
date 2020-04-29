import calRectangleArea from 'my-ts-mathlib/es/calRectangleArea';

// //You can uncomment and see this code should give error
// var rect1 = { side1: '3', side2: '4' };
// console.log('This must give compile error ', calRectangleArea(rect1));

var rect2 = { side1: 3, side2: 4 };

console.log('Rectangle with side 3, 4 has area = ', calRectangleArea(rect2));
