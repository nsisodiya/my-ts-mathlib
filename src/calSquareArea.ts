import { calRectangleArea } from "./calRectangleArea";

// This package is to demonstrate one package depends on another.

export const calSquareArea = function calSquareArea(side: number): number {
  return calRectangleArea(side, side);
};
