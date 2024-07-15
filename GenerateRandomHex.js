const flattenedArray = arr => [].concat(...arr);
console.log(1 +  "2" + "2");
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();