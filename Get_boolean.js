const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);