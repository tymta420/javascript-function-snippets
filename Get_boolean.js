const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const arrayContains = (arr, element) => arr.includes(element);
const isTabInView = () => !document.hidden;