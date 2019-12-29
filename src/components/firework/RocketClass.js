import {Rocket} from "./Rocket";
import {Background} from "./Background";
import {colorHsl, percentage, random} from "../utils/utils";

const boundaries = (x, y, canvas) => {
  const {width, height} = canvas;
  const isX             = x > 100 && x < width - 100;
  const isY             = y < height - 350;
  return isX === true && isY === true;
};

function RocketClass({ctx, x, y, img, gravity, color, angle, velocity, canvas}) {
  this.vx                = x;
  this.vy                = y;
  this.canvas            = canvas;
  this.ctx               = ctx;
  this.img               = img;
  this.counter           = 0;
  this.gravity           = gravity;
  this.steps             = parseInt(random(200, 400).toString(), 10);
  this.speedConstant     = random(0.005, 0.05);
  this.isAnimation       = true;
  this.colorFadeConstant = 50;

  const {
          colorRing,
          saturation,
          lightness,
          opacity
        }                = color;

  const loop = () => {
    this.counter    = this.counter + 1;
    this.gravity    = this.gravity + this.speedConstant;
    const color     = colorHsl(colorRing, saturation, lightness, opacity);
    const stepsLeft = this.steps - this.counter;

    this.vx = (this.vx + (angle)); // direction or angle of the rocket
    this.vy = (this.vy - (velocity - this.gravity)); // velocity and gravity

    if (this.counter < this.steps && this.isAnimation) {
      if (stepsLeft > this.colorFadeConstant) {
        if (!boundaries(this.vx, this.vy, this.canvas)) {
          this.steps = this.counter + this.colorFadeConstant - 1;
        }
        // full brightness colour
        Rocket(this.ctx, this.vx, this.vy, color, color);
      } else {
        // fading out colour
        const saturation = percentage(stepsLeft, this.colorFadeConstant);
        const color      = colorHsl(colorRing, `${saturation}%`, lightness, saturation / 100);
        Rocket(this.ctx, this.vx, this.vy, color, color);
      }
      // gives blast effect
      setTimeout(() => Background(this.ctx, this.img, 0.1), 300);
      window.requestAnimationFrame(loop);
    } else {
      // end of a loop
      // background refresh and callback about finish(?)
    }
  };

  window.requestAnimationFrame(loop);
}

export default RocketClass;
