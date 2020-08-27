// local files
import checkIsNumber from "./checkIsNumber";

const getHoursFromMinutes = minutes => {
  if (!checkIsNumber(minutes)) {
    throw new Error(`The parameter is not a number`);
  }

  return minutes / 60;
};

export default getHoursFromMinutes;
