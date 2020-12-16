// local modules - functions
const checkIsString = require("../checkIsString");

const getDropboxRawFileURL = (filePath = "") => {
  if (!checkIsString(filePath)) {
    console.warn("Parameter is not valid.", filePath);
    return "";
  }

  return `https://www.dropbox.com/s/${filePath}?raw=1`;
};

module.exports = getDropboxRawFileURL;
