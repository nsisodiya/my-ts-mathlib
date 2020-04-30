import { calSquareArea } from './node_modules/my-ts-mathlib/dist/index.module.js';

var sqr1 = { side: '3' };

document.getElementById('result').innerHTML = calSquareArea(sqr1);
