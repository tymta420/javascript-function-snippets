const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;
const isEmptyObject = obj => Object.keys(obj).length === 0;