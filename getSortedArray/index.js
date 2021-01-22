// local files
const checkIsArray = require("../checkIsArray");

const getSortedArray = (array) => {
  if (!checkIsArray(array)) {
    throw new Error("The parameter is not array.");
  }

  return array.sort();
};

module.exports = getSortedArray;
