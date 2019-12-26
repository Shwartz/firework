import React from 'react'
import city from '../../static/artur-aldyrkhanov-unsplash_small.jpg'
import styles from './Canvas.module.scss';
import {rocket} from '../firework/Rocket';
import {Background} from '../firework/Background';

export default class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.imgRef    = React.createRef();
  }

  componentDidMount() {
    const ctx       = this.canvasRef.current.getContext('2d');
    let counter     = 0;
    let vx          = 350;
    let vy          = 470;
    let intID       = 0;
    let globalAlpha = 0.4;
    let timeout     = 30;

    ctx.drawImage(this.imgRef.current, 0, 0);

    const boundaries = (x, y) => {
      const isX = x > 100 && x < 700;
      const isY = y > 100 && y < 470;
      return isX === true && isY === true;
    };

    const fireRocketUpLoop = () => {
      counter      = counter + 1;
      vx           = (vx + 1.5);
      vy           = (vy - 2);

      Background(ctx, this.imgRef, globalAlpha);
      rocket(ctx, vx, vy);

      if (!boundaries(vx, vy)) {
        console.log('End of step one - Rocket is up', vx, vy, counter); //627.5 100 185
        clearInterval(intID);
        globalAlpha = 1;
        Background(ctx, this.imgRef, globalAlpha);
        rocket(ctx, vx, vy);
      }

      testCircle();
    };

    this.imgRef.current.onload = () => {
      intID = setInterval(fireRocketUpLoop, timeout);
    };

    const testCircle = () => {
      console.log('test');
      ctx.beginPath();
      ctx.arc(350, 470, 5, 0, Math.PI * 2, true);
      ctx.strokeStyle = 'rgb(255,255,255)';
      ctx.fillStyle   = 'yellow';
      ctx.fill();
      ctx.stroke();
    }
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

// Photo by Artur Aldyrkhanov on Unsplash
