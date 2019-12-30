export const Background = (ctx, img, globalAlpha) => {
  ctx.beginPath();
  ctx.save();
  ctx.globalAlpha = globalAlpha;
  ctx.drawImage(img.current, 0, 0);
  ctx.font      = '12px Courier';
  ctx.fillStyle = 'rgba(255,255,255,1)';
  ctx.fillText('Photo by Artur Aldyrkhanov on Unsplash', 10, 520);
  ctx.restore();
};
