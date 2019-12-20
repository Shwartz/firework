import React from 'react'
import city from '../../static/artur-aldyrkhanov-unsplash_small.jpg'
import styles from './Canvas.module.scss';
import {firework} from '../firework/Firework';

export default class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.imgRef    = React.createRef();
  }

  componentDidMount() {
    const ctx     = this.canvasRef.current.getContext('2d');
    let counter   = 0;
    let xDistance = 100;
    let yDistance = 100;
    let intID     = 0;
    let globalAlpha = 0.5;

    const loop = () => {
      counter   = counter + 1;
      xDistance = xDistance + 1;
      yDistance = yDistance + 1.5;

      if (counter > 10) {
        console.log(counter);
        clearInterval(intID);
        globalAlpha = 1;
        testDistance();
      }

      ctx.beginPath();
      ctx.save();
      ctx.globalAlpha = globalAlpha;
      ctx.drawImage(this.imgRef.current, 0, 0);
      ctx.font      = "40px Courier";
      ctx.fillStyle = "white";
      ctx.fillText('This is some text', 0, 75);

      firework(ctx, xDistance, yDistance);
    };
    this.imgRef.current.onload = () => {
      intID = setInterval(() => loop(), 30);
    };

    const testDistance = () => {
      console.log('test');
      ctx.beginPath();
      ctx.arc(100, 100, 5, 0, Math.PI * 2, true);
      ctx.strokeStyle = 'rgb(255,255,255)';
      ctx.fillStyle = 'yellow';
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
