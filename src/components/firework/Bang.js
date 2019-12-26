import {Rocket} from "./Rocket";
import {Background} from "./Background";
import {random, randomColor} from "../utils/utils";

function RocketClass({ctx, x, y, img, gravity, color, angle, velocity}) {
  this.vx      = x;
  this.vy      = y;
  this.ctx     = ctx;
  this.img     = img;
  this.counter = 0;
  this.intID   = 0;
  this.gravity = gravity;

  const loop = () => {
    this.counter = this.counter + 1;
    this.gravity = this.gravity + 0.02;

    this.vx = (this.vx + (angle)); // direction or angle of the rocket
    this.vy = (this.vy - (velocity - this.gravity)); // velocity and gravity

    Rocket(this.ctx, this.vx, this.vy, color, color);
    setTimeout(() => Background(this.ctx, this.img, 0.1), 200);

    if (this.counter > 120) {
      console.log('vx: ', this.vx);
      console.log('vy: ', this.vy);
      //Rocket(ctx, vx, vy, 'rgba(0.0.0.0)', 'rgba(0.0.0.0)');
      //Background(ctx, img, 1);
      clearInterval(this.intID);
    }
  };

  this.intID = setInterval(loop, 60);
}

const randomizeRocketParams = ({ctx, x, y, img, gravity, color, angle, velocity}) => {
  return {
    ctx,
    x,
    y,
    img,
    gravity,
    color,
    angle,
    velocity
  }
};

/**
 *
 * @param ctx - Canvas obj
 * @param x - x position
 * @param y - y position
 * @param img - context of the background image
 * @constructor
 */
export const Bang = (ctx, x, y, img) => {
  // Multiple rockets
  console.log('bang starts here', randomColor());
  let gravity       = 0.1;
  const rocketProps = () => randomizeRocketParams({
    ctx,
    x,
    y,
    img,
    gravity,
    color:    `#${randomColor()}`,
    angle:    random(-3, 3),
    velocity: random(-1, 1)
  });

  for(let i = 0; i < 5; i++) {
    setTimeout(() => new RocketClass(rocketProps()), 10);
  }
};
