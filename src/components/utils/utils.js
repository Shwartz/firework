export const randomColorHex = () => Math.floor(Math.random() * 0xffffff).toString(16);
export const random         = (min, max) => parseFloat((Math.random() * (max - min) + min));
export const colorHsl       = (colorRing, saturation, lightness, opacity) => `hsla(${colorRing}, ${saturation}, ${lightness}, ${opacity}`;
export const percentage     = (num, volume) => (num * 100) / volume;
