// We are using Global variable = myTsMathlib
import { calRectangleArea } from 'my-ts-mathlib';

function main() {
  // var rect1 = { side1: '3', side2: 4 }; This will give error.
  var rect1 = { side1: 3, side2: 4.566 };
  const ele = document.getElementById('result');
  if (ele !== null && ele !== undefined) {
    ele.innerHTML = calRectangleArea(rect1) + '';
  }
}

main();
