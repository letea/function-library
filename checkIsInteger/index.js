// local files
import checkIsNumber from "../checkIsNumber/index.js";

const checkIsInteger = (value) => {
  if (checkIsNumber(value)) {
    return Number.isInteger(value);
  }
  return false;
};

export default checkIsInteger;
