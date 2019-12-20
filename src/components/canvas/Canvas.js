import React from 'react'
import city from '../../static/artur-aldyrkhanov-unsplash_small.jpg'
import styles from './Canvas.module.scss';

export default class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.imgRef = React.createRef();
  }
  componentDidMount() {
    const ctx = this.canvasRef.current.getContext('2d');

    this.imgRef.current.onload = () => {
      ctx.beginPath();
      ctx.drawImage(this.imgRef.current, 0, 0);
      ctx.font = "40px Courier";
      ctx.fillStyle = "white";
      ctx.fillText('This is some text', 0, 75);


    };

    setTimeout(() => {
      ctx.beginPath();
      ctx.arc(100, 100, 5, 0, Math.PI * 2, true);
      ctx.strokeStyle = 'white';
      ctx.fill();
      ctx.stroke();

      ctx.beginPath();
      ctx.strokeStyle = 'white';
      ctx.moveTo(20, 20);
      ctx.lineTo(200, 20);
      ctx.stroke();

    }, 1000)

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
