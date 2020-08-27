// local files
import checkIsNumber from "./checkIsNumber";

const getMinutesFromSeconds = seconds => {
  if (!checkIsNumber(seconds)) {
    throw new Error(`The parameter is not a number`);
  }

  return seconds / 60;
};

export default getMinutesFromSeconds;
