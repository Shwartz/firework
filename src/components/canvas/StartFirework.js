import {random} from "../utils/utils";
import {Background} from "../firework/Background";
import {Rocket} from "../firework/Rocket";
import {FireworkConfig} from "../firework/FireworkConfig";
import AnimationFrame from "../utils/AnimationFrame";

export const StartFirework = ({
  gravity,
  vx,
  vy,
  ctx,
  imgRef,
  canvas
}) => {
  const direction = random(-2, 2);

  const boundaries = (x, y) => {
    const isX = x > 100 && x < 700;
    const isY = y > 100 && y < 470;
    return isX === true && isY === true;
  };

  const rocket = () => {
    gravity = gravity + 0.02;
    vx      = (vx + direction + random(-0.5, 0.5)); // direction (angle), randomize lifting of the rocket
    vy      = (vy - (4 - gravity)); // velocity and gravity

    Background(ctx, imgRef, 0.2);
    ctx.strokeStyle = 'rgb(255,255,255)';
    Rocket(ctx, vx, vy);

    if (!boundaries(vx, vy)) {
      // Loop is over, Rocket reach maximum and explodes
      console.log('End of step one - Rocket is up', vx, vy); //627.5 100 185
      Rocket(ctx, vx, vy, 'rgb(255,255,255)', 'rgb(255,255,255)');
      animateRocket.stop();
      FireworkConfig(ctx, vx, vy, imgRef, canvas);
    }
  };

  const animateRocket = new AnimationFrame(rocket, 30);
  animateRocket.start();
};
