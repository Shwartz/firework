export const GameLoop = (fn, fps) => {
  fps = fps || 60;

  let now;
  let delta;
  let interval;
  let then = new Date().getTime();

  let frames;
  let oldTime = 0;

  return (function loop(time) {
    requestAnimationFrame(loop);

    interval = 1000 / fps;
    now      = new Date().getTime();
    delta    = now - then;

    if (delta > interval) {
      // update time stuffs
      then = now - (delta % interval);

      // calculate the frames per second
      frames  = 1000 / (time - oldTime);
      oldTime = time;

      // call the fn
      // and pass current fps to it
      fn(frames);
    }
  }(0));
};

export default GameLoop;
