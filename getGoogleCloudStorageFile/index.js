// local modules - functions
import checkIsString from "../checkIsString/index.js";

const getGoogleCloudStorageFile = (filePath = "") => {
  if (!checkIsString(filePath)) {
    console.warn("Parameter is not valid.", filePath);
    return "";
  }

  return `https://storage.googleapis.com/${filePath}`;
};

export default getGoogleCloudStorageFile;
