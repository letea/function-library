// local files
import checkIsNumber from "./checkIsNumber";
import getMinutesFromHours from "./getMinutesFromHours";
import getSecondsFromMinutes from "./getSecondsFromMinutes";

const getSecondsFromHours = hours => {
  if (!checkIsNumber(hours)) {
    throw new Error(`The parameter is not a number`);
  }

  const minutes = getMinutesFromHours(hours);

  return getSecondsFromMinutes(minutes);
};

export default getSecondsFromHours;
