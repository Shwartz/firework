// clear white lines from rocket
import {Background} from "./Background";
import {createCounter} from "../utils/utils";

export const ClearBackground = (ctx, img) => {
  const  counter = createCounter();

  const clear = () => {
    const count = counter();
    Background(ctx, img, count / 10);

    if (count < 10) {
      setTimeout(clear, 100);
    }
  };

  clear();
};

