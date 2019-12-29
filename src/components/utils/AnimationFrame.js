class AnimationFrame {
  constructor(animate, fps = 60) {
    this.requestID = 0;
    this.fps = fps;
    this.animate = animate;
  }

  start() {
    let then = performance.now();
    const interval = 1000 / this.fps;
    const tolerance = 0.1;

    const animateLoop = (now) => {
      this.requestID = window.requestAnimationFrame(animateLoop);
      const delta = now - then;

      if (delta >= interval - tolerance) {
        then = now - (delta % interval);
        this.animate(delta);
      }
    };
    this.requestID = window.requestAnimationFrame(animateLoop);
  }

  stop() {
    cancelAnimationFrame(this.requestID);
  }

}

export default AnimationFrame;
