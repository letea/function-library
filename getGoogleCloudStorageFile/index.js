// local modules - functions
const checkIsString = require("../checkIsString");

const getGoogleCloudStorageFile = (filePath = "") => {
  if (!checkIsString(filePath)) {
    console.warn("Parameter is not valid.", filePath);
    return "";
  }

  return `https://storage.cloud.google.com/${filePath}`;
};

module.exports = getGoogleCloudStorageFile;
