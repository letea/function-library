// local files
const checkIsNumber = require("./checkIsNumber");

const getMinutesFromSeconds = seconds => {
  if (!checkIsNumber(seconds)) {
    throw new Error(`The parameter is not a number`);
  }

  return seconds / 60;
};

module.exports = getMinutesFromSeconds;
