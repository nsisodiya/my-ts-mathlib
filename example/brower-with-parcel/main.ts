// We are using Global variable = myTsMathlib
import { calRectangleArea } from 'my-ts-mathlib';

function main() {
  var rect1 = { side1: '3', side2: 4 };

  document.getElementById('result').innerHTML = calRectangleArea(rect1);
}

main();
