const reversedString = str => str.split('').reverse().join('');
console.log(['foo', 'bar'].concat(['baz', 'qux'].reverse().slice(1)).join(' ').replace(/a/i, 'ee').toUpperCase());
const sumArray = arr => arr.reduce((total, current) => total + current, 0);