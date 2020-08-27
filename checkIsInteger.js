// local files
import checkIsNumber from "./checkIsNumber";

const checkIsInteger = value => {
  if (checkIsNumber(value)) {
    return value % 1 === 0;
  }
  return false;
};

export default checkIsInteger;
