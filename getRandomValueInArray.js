// local files
import checkIsArray from "./checkIsArray";
import getRandomIndexInArray from "./getRandomIndexInArray";

const getRandomValueInArray = (array = []) => {
  if (!checkIsArray(array)) {
    throw new Error("Parameter should be an array");
  }

  const index = getRandomIndexInArray(array);

  return index >= 0 ? array[index] : undefined;
};

export default getRandomValueInArray;
