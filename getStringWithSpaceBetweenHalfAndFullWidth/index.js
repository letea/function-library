// node module
import pangu from "pangu";

// local files
import checkIsString from "../checkIsString/index.js";

const getStringWithSpaceBetweenHalfAndFullWidth = (text = "") => {
  if (!checkIsString(text)) {
    throw new Error(
      "getStringWithSpaceBetweenHalfAndFullWidth: parameter is not string"
    );
  }

  return pangu.spacing(text);
};

export default getStringWithSpaceBetweenHalfAndFullWidth;
