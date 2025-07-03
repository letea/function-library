// local modules - functions
import checkIsArray from "../checkIsArray/index.js";

const getTrulyArray = (array = []) => {
  if (!checkIsArray(array)) {
    console.warn("Parameter is not valid", array);
    return [];
  }

  return array.filter(Boolean);
};

export default getTrulyArray;
