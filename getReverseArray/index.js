// local files
import checkIsArray from "../checkIsArray/index.js";

const getReverseArray = (array) => {
  if (!checkIsArray(array)) {
    throw new Error("The parameter is not array.");
  }

  return array.reverse();
};

export default getReverseArray;
