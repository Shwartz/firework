export const Rocket = (ctx, xDistance, yDistance, strokeStyle, fillStyle, radius = 1) => {
    ctx.beginPath();
    ctx.arc(xDistance, yDistance, radius, 0, Math.PI * 2, true);
    ctx.strokeStyle = strokeStyle;
    ctx.fillStyle = fillStyle;
    ctx.fill();
    ctx.stroke();
};
