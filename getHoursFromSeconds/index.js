// local files
import checkIsNumber from "../checkIsNumber/index.js";
import getMinutesFromSeconds from "../getMinutesFromSeconds/index.js";
import getHoursFromMinutes from "../getHoursFromMinutes/index.js";

const getHoursFromSeconds = (seconds) => {
  if (!checkIsNumber(seconds)) {
    throw new Error(`The parameter is not a number`);
  }

  const minutes = getMinutesFromSeconds(seconds);

  return getHoursFromMinutes(minutes);
};

export default getHoursFromSeconds;
