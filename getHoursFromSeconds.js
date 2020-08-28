// local files
const checkIsNumber = require("./checkIsNumber");
const getMinutesFromSeconds = require("./getMinutesFromSeconds");
const getHoursFromMinutes = require("./getHoursFromMinutes");

const getHoursFromSeconds = seconds => {
  if (!checkIsNumber(seconds)) {
    throw new Error(`The parameter is not a number`);
  }

  const minutes = getMinutesFromSeconds(seconds);

  return getHoursFromMinutes(minutes);
};

module.exports = getHoursFromSeconds;
