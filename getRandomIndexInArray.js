// local files
import checkIsArray from "./checkIsArray";

const getRandomIndexInArray = (array = []) => {
  if (!checkIsArray(array)) {
    throw new Error("Parameter should be an array");
  }

  if (array.length === 0) {
    return -1;
  }

  return Math.floor(Math.random() * array.length);
};

export default getRandomIndexInArray;
