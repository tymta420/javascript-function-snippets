var uAgent = (typeof navigator !== 'undefined') ? navigator.userAgent : null;
const result = await makeHttpRequest(url);
const stringReverse = str => str.split("").reverse().join("");