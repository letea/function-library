// local files
const checkIsArray = require("../checkIsArray");

const getReverseArray = array => {
  if (!checkIsArray(array)) {
    throw new Error("The parameter is not array.");
  }

  return array.reverse();
};

module.exports = getReverseArray;
