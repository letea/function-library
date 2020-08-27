// local files
import checkIsArray from "./checkIsArray";

const checkIsArrayEmpty = array => {
  if (!checkIsArray(array)) {
    throw new Error(`The parameter is not an array.`);
  }

  return array.length === 0;
};

export default checkIsArrayEmpty;
