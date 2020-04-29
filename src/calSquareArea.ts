import { calRectangleArea } from './calRectangleArea';

interface iSquare {
  side: number;
}
// This package is to demonstrate one package depends on another.

export const calSquareArea = function calSquareArea(sqr: iSquare): number {
  return calRectangleArea({
    side1: sqr.side,
    side2: sqr.side
  });
};
