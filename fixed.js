const lastElement = arr => arr[arr.length - 1];
var uAgent = (typeof navigator !== 'undefined') ? navigator.userAgent : null;
console.log( "A" - "B" + 2);
const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);
const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);