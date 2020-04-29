interface iRectangle {
  side1: number;
  side2: number;
}

export const calRectangleArea = function calRectangleArea(
  rect: iRectangle
): number {
  return rect.side1 * rect.side2;
};
