// local modules - functions
const checkIsArray = require("./checkIsArray");

const getTrulyArray = (array = []) => {
  if (!checkIsArray(array)) {
    console.warn("Parameter is not valid", array);
    return [];
  }

  return array.filter(Boolean);
};

module.exports = getTrulyArray;
