const intermediateAppPath = path.join(buildOutputPath, 'app');
const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};
const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);