// node module
const pangu = require("pangu");

// local files
const checkIsString = require("../checkIsString");

const getStringWithSpaceBetweenHalfAndFullWidth = (text = "") => {
  if (!checkIsString(text)) {
    throw new Error(
      "getStringWithSpaceBetweenHalfAndFullWidth: parameter is not string"
    );
  }

  return pangu.spacing(text);
};

module.exports = getStringWithSpaceBetweenHalfAndFullWidth;
