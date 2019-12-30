import React from 'react'
import city from '../../static/artur-aldyrkhanov-unsplash_small.jpg'
import styles from './Canvas.module.scss';
import {Rocket} from '../firework/Rocket';
import {Background} from '../firework/Background';
import {FireworkConfig} from "../firework/FireworkConfig";
import AnimationFrame from "../utils/AnimationFrame";
import {random} from "../utils/utils";

export default class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.imgRef    = React.createRef();
  }

  componentDidMount() {
    const ctx       = this.canvasRef.current.getContext('2d');
    const canvas    = this.canvasRef.current;
    const direction = random(-2, 2);
    let gravity     = 0.1;
    let vx          = 350; // start vx
    let vy          = 470; // start vy
    let globalAlpha = 0.4;

    ctx.drawImage(this.imgRef.current, 0, 0);

    const boundaries = (x, y) => {
      const isX = x > 30 && x < 780;
      const isY = y > 100 && y < 470;
      return isX === true && isY === true;
    };

    const rocket = () => {
      gravity = gravity + 0.02;
      vx      = (vx + direction + random(-0.5, 0.5)); // direction (angle), randomize lifting of the rocket
      vy      = (vy - (4 - gravity)); // velocity and gravity

      Background(ctx, this.imgRef, globalAlpha);
      ctx.strokeStyle = 'rgb(255,255,255)';
      Rocket(ctx, vx, vy);

      if (!boundaries(vx, vy)) {
        // Loop is over, Rocket reach maximum and explodes
        // console.log('End of step one - Rocket is up', vx, vy); //627.5 100 185
        Rocket(ctx, vx, vy, 'rgb(255,255,255)', 'rgb(255,255,255)');
        animateRocket.stop();
        FireworkConfig(ctx, vx, vy, this.imgRef, canvas);
      }
    };

    const animateRocket = new AnimationFrame(rocket, 30);

    this.imgRef.current.onload = () => {
      animateRocket.start();
      Background(ctx, this.imgRef, 1);
      // Bang(ctx, 527.5, 100, this.imgRef, canvas);
    };
  }

  render() {
    return (
      <div>
        <p>Canvas</p>
        <canvas
          ref={this.canvasRef}
          width={800}
          height={533}
        />
        <img
          ref={this.imgRef}
          src={city}
          alt="Night city"
          className={styles.hidden}
        />
      </div>
    )
  }
}
/**
 * NOTES
 * Photo by Artur Aldyrkhanov on Unsplash
 * http://hslpicker.com/#f00
 *
 * TODO:
 * - Loop for a new firework
 * - randomize Rocket angle
 * - Speedy ones should be bigger
 */


