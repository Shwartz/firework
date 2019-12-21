export const randomColor = () => Math.floor(Math.random()*0xffffff).toString(16);

export const firework = (ctx, xDistance, yDistance) => {
    ctx.beginPath();
    ctx.arc(xDistance, yDistance, 1, 0, Math.PI * 2, true);
    ctx.strokeStyle = 'rgb(255,255,255)';
    ctx.fillStyle = 'rgb(255,255,255)';
    ctx.fill();
    ctx.stroke();
};
