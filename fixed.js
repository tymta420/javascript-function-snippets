const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
var DELIM_SIZE = 4;
const isArray = (arr) => Array.isArray(arr);
const minNumber = arr => Math.min(...arr);
var regexp  = new RegExp('{{([^}]+)}}', 'g');
const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;