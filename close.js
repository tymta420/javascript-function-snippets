const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const copyToClipboard = (text) => navigator.clipboard.writeText(text);