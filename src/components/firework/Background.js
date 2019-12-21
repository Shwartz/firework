export const Background = (ctx, img, alpha) => {
  ctx.beginPath();
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.drawImage(img.current, 0, 0);
  ctx.font      = "40px Courier";
  ctx.fillStyle = "white";
  ctx.fillText('This is some text', 0, 75);
};
