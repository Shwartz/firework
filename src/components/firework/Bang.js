import RocketClass from './RocketClass';
import {random} from "../utils/utils";

const randomizeRocketParams = ({ctx, x, y, img, gravity, color, angle, velocity, canvas}) => {
  return {
    ctx,
    x,
    y,
    img,
    gravity,
    color,
    angle,
    velocity,
    canvas
  }
};

/**
 *
 * @param ctx - Canvas obj
 * @param x - x position
 * @param y - y position
 * @param img - context of the background image
 * @param canvas - Canvas element
 * @constructor
 */
export const Bang = (ctx, x, y, img, canvas) => {
  // Multiple rockets
  console.log('===> canvas: ', canvas);
  let gravity          = 0.1;
  const rocketProps    = () => randomizeRocketParams({
    ctx,
    x,
    y,
    img,
    canvas,
    gravity,
    color:    {
      colorRing: parseInt(random(0, 360).toString(), 10),
      saturation: '100%',
      lightness: '50%',
      opacity: '1',
    },
    angle:    random(-2, 2),
    velocity: random(-1, 2),
  });

  for (let i = 0; i < 50; i++) {
    new RocketClass(rocketProps());
  }
};
