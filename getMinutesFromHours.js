// local files
import checkIsNumber from "./checkIsNumber";

const getMinutesFromHours = hours => {
  if (!checkIsNumber(hours)) {
    throw new Error(`The parameter is not a number`);
  }

  return hours * 60;
};

export default getMinutesFromHours;
