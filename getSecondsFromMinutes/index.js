// local files
const checkIsNumber = require("../checkIsNumber");

const getSecondsFromMinutes = (minutes) => {
  if (!checkIsNumber(minutes)) {
    throw new Error(`The parameter is not a number`);
  }

  return minutes * 60;
};

module.exports = getSecondsFromMinutes;
