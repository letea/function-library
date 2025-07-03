// local files
import checkIsArray from "../checkIsArray/index.js";

const getSortedArray = (array) => {
  if (!checkIsArray(array)) {
    throw new Error("The parameter is not array.");
  }

  return array.sort();
};

export default getSortedArray;
