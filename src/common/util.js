export function clamp(x, fromX, toX) {
  let xF = x;

  if (x < fromX) xF = fromX;
  if (x > toX) xF = toX;

  return xF;
}
