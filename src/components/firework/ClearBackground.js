// clear white lines from rocket
import {Background} from "./Background";

export const ClearBackground = (ctx, img) => {
  let counter = 0;

  const clear = () => {
    counter = counter + 1;
    Background(ctx, img, counter / 10);

    if (counter < 10) {
      setTimeout(clear, 100);
    }
  };

  clear();
};

