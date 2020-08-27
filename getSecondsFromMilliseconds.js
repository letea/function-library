// local files
import checkIsNumber from "./checkIsNumber";

const getSecondsFromMilliseconds = milliseconds => {
  if (!checkIsNumber(milliseconds)) {
    throw new Error(`The parameter is not a number`);
  }

  return milliseconds / 1000;
};

export default getSecondsFromMilliseconds;
