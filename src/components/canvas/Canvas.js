import React from 'react'
import city from '../../static/artur-aldyrkhanov-unsplash_small.jpg'
import styles from './Canvas.module.scss';
import {Background} from '../firework/Background';
import {StartFirework} from "./StartFirework";
import {createCounter} from "../utils/utils";

export default class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.imgRef    = React.createRef();
  }

  componentDidMount() {
    const ctx       = this.canvasRef.current.getContext('2d');
    const canvas    = this.canvasRef.current;
    let gravity     = 0.1;
    let vx          = 350; // start vx
    let vy          = 470; // start vy
    let intId = 0;

    ctx.drawImage(this.imgRef.current, 0, 0);
    const counter = createCounter();

    const fireworkConfig = () => ({
      gravity,
      vx,
      vy,
      ctx,
      imgRef: this.imgRef,
      canvas
    });

    const shoot = () => {
      const count = counter();
      console.log('counter: ', count);
      if (count > 6) {
        console.log('stop intId: ', intId);
        clearInterval(intId);
      }
      StartFirework(fireworkConfig());
    };

    intId = setInterval(() => {
      shoot();
    }, 5000);

    this.imgRef.current.onload = () => {
      shoot();
      Background(ctx, this.imgRef, 1);
    };
  }

  render() {
    return (
      <div>
        <h1>2020</h1>
        <p>Happy New Year</p>
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


