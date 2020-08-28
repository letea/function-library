// local files
const checkIsNumber = require("./checkIsNumber");
const getMinutesFromHours = require("./getMinutesFromHours");
const getSecondsFromMinutes = require("./getSecondsFromMinutes");

const getSecondsFromHours = hours => {
  if (!checkIsNumber(hours)) {
    throw new Error(`The parameter is not a number`);
  }

  const minutes = getMinutesFromHours(hours);

  return getSecondsFromMinutes(minutes);
};

module.exports = getSecondsFromHours;
