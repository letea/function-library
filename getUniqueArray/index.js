// local files
const checkIsArray = require("../checkIsArray");

const getUniqueArray = (array) => {
  if (!checkIsArray(array)) {
    throw new Error("The parameter is not array.");
  }

  return [...new Set(array)];
};

module.exports = getUniqueArray;

/*
  Reference:
    1. https://www.30secondsofcode.org/js/s/unique-elements/
*/
