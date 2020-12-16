// node modules
const ClipboardJS = require("clipboard");

const checkIsClipboardSupported = () => {
  return ClipboardJS.isSupported();
};

module.exports = checkIsClipboardSupported;
