// local files
const checkIsNumber = require("./checkIsNumber");

const checkIsInteger = value => {
  if (checkIsNumber(value)) {
    return value % 1 === 0;
  }
  return false;
};

module.exports = checkIsInteger;
