import {Rocket} from "./Rocket";
import {Background} from "./Background";

function RocketClass(ctx, vx, vy, img, gravity) {
  this.vx = vx;
  this.vy = vy;
  this.ctx = ctx;
  this.gravity = gravity;
  this.img = img;
  this.counter = 0;
  this.intID = 0;

  const loop = () => {
    console.log('loop');

    this.counter = this.counter + 1;
    this.gravity = this.gravity + 0.02;

    this.vx      = (this.vx + (1)); // direction or angle of the rocket
    this.vy      = (this.vy - (2 - gravity)); // velocity and gravity
    Rocket(this.ctx, this.vx, vy, 'white', 'white');

    setTimeout(() => Background(this.ctx, this.img, 0.1), 200);
    if (this.counter > 100) {
      console.log('vx: ', this.vx);
      console.log('vy: ', this.vy);
      //Rocket(ctx, vx, vy, 'rgba(0.0.0.0)', 'rgba(0.0.0.0)');
      //Background(ctx, img, 1);
      clearInterval(this.intID);
    }
  };

  this.intID = setInterval(loop, 40);
}

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
  console.log('bang starts here');
  const timeout = 40;
  let counter   = 0;
  let gravity   = 0.1;
  let vx        = x;
  let vy        = y;

  const rocket1 = new RocketClass(ctx, vx, vy, img, 0.1);
  console.log('rocket1: ', rocket1);

  const loop = () => {
    console.log('loop');

    counter = counter + 1;
    gravity = gravity + 0.02;

    vx      = (vx + (-1)); // direction or angle of the rocket
    vy      = (vy - (2 - gravity)); // velocity and gravity
    Rocket(ctx, vx, vy, 'red', 'red');

    setTimeout(() => Background(ctx, img, 0.1), 200);
    if (counter > 100) {
      console.log('vx: ', vx);
      console.log('vy: ', vy);
      //Rocket(ctx, vx, vy, 'rgba(0.0.0.0)', 'rgba(0.0.0.0)');
      //Background(ctx, img, 1);
      clearInterval(intID);
    }

  };

  const intID = setInterval(loop, timeout);
};
