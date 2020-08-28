// local files
const checkIsNumber = require("./checkIsNumber");

const getMillisecondsFromSeconds = seconds => {
  if (!checkIsNumber(seconds)) {
    throw new Error(`The parameter is not a number`);
  }

  return seconds * 1000;
};

module.exports = getMillisecondsFromSeconds;
