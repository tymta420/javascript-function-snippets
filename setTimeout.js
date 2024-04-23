const copyToClipboard = (text) => navigator.clipboard.writeText(text);
const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const isEmptyObject = obj => Object.keys(obj).length === 0;
const fullName = name || 'buddy';
console.log("1 || 2 = "+(1 || 2));
const executableName = getExecutableName(channel, appName);