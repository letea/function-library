// local modules - functions
import checkIsString from "./checkIsString";

const getDropboxRawFileURL = (filePath = "") => {
  if (!checkIsString(filePath)) {
    console.warn("Parameter is not valid.", filePath);
    return "";
  }

  return `https://www.dropbox.com/s/${filePath}?raw=1`;
};

export default getDropboxRawFileURL;
