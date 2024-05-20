const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const merge = Object.assign({}, obj1, obj2);
var c = new Counter(); c.add(); c.add(); c.add();