export const degToRad  = (deg) => deg * (Math.PI / 180);
export const radToDeg  = (rad) => rad * (180 / Math.PI);
export const vecLength = (vx, vy) => Math.sqrt(vx * vx + vy * vy);

export const vector2d = (x, y) => {
  const vector = {
    vx: x,
    vy: y
  };

  return vector;
};
