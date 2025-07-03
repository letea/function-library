// local files
import checkIsNumber from "../checkIsNumber/index.js";
import getMinutesFromHours from "../getMinutesFromHours/index.js";
import getSecondsFromMinutes from "../getSecondsFromMinutes/index.js";

const getSecondsFromHours = (hours) => {
  if (!checkIsNumber(hours)) {
    throw new Error(`The parameter is not a number`);
  }

  const minutes = getMinutesFromHours(hours);

  return getSecondsFromMinutes(minutes);
};

export default getSecondsFromHours;
