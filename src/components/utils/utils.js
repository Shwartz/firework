export const randomColor = () => Math.floor(Math.random() * 0xffffff).toString(16);
export const random = (min, max) => parseFloat((Math.random() * (max - min) + min));
