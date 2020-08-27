// local files
import checkIsNumber from "./checkIsNumber";
import getMinutesFromSeconds from "./getMinutesFromSeconds";
import getHoursFromMinutes from "./getHoursFromMinutes";

const getHoursFromSeconds = seconds => {
  if (!checkIsNumber(seconds)) {
    throw new Error(`The parameter is not a number`);
  }

  const minutes = getMinutesFromSeconds(seconds);

  return getHoursFromMinutes(minutes);
};

export default getHoursFromSeconds;
