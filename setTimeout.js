const shuffledArray = array.sort(() => Math.random() - 0.5); 
const uniqueArr = (arr) => [...new Set(arr)];
const copyToClipboard = (text) => navigator.clipboard.writeText(text);