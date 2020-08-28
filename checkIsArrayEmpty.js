// local files
const checkIsArray = require("./checkIsArray");

const checkIsArrayEmpty = array => {
  if (!checkIsArray(array)) {
    throw new Error(`The parameter is not an array.`);
  }

  return array.length === 0;
};

module.exports = checkIsArrayEmpty;
