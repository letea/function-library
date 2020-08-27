// local files
import checkIsArray from "./checkIsArray";

const getUniqueArray = array => {
  if (!checkIsArray(array)) {
    throw new Error("The parameter is not array.");
  }

  return [...new Set(array)];
};

export default getUniqueArray;

/*
  Reference:
    1. https://www.30secondsofcode.org/js/s/unique-elements/
*/
