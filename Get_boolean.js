const merge = (a, b) => [...a, ...b];
console.log(['foo', 'bar'].concat(['baz', 'qux'].reverse().slice(1)).join(' ').replace(/a/i, 'ee').toUpperCase());
const copyToClipboard = (text) => navigator.clipboard.writeText(text);
const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;
var DELIM_SIZE = 4;