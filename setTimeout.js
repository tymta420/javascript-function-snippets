var DELIM_SIZE = 4;
const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};
const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};