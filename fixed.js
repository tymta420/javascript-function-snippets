const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
const isEmptyObject = obj => Object.keys(obj).length === 0;
const average = arr => arr.reduce((a, b) => a + b) / arr.length;