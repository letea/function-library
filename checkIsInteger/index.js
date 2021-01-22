// local files
const checkIsNumber = require("../checkIsNumber");

const checkIsInteger = (value) => {
  if (checkIsNumber(value)) {
    return Number.isInteger(value);
  }
  return false;
};

module.exports = checkIsInteger;
