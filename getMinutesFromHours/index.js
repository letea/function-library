// local files
const checkIsNumber = require("../checkIsNumber");

const getMinutesFromHours = hours => {
  if (!checkIsNumber(hours)) {
    throw new Error(`The parameter is not a number`);
  }

  return hours * 60;
};

module.exports = getMinutesFromHours;
