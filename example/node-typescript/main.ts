//import calRectangleArea from 'my-ts-mathlib/es/calRectangleArea';

import { calRectangleArea } from 'my-ts-mathlib';

var rect1 = { side1: '3', side2: '4' };
var rect2 = { side1: 3, side2: 4 };

console.log('This should give compile error ', calRectangleArea(rect1));

console.log('Rectangle with side 3, 4 has area = ', calRectangleArea(rect2));
