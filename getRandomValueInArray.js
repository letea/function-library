// local files
const checkIsArray = require("./checkIsArray");
const getRandomIndexInArray = require("./getRandomIndexInArray");

const getRandomValueInArray = (array = []) => {
  if (!checkIsArray(array)) {
    throw new Error("Parameter should be an array");
  }

  const index = getRandomIndexInArray(array);

  return index >= 0 ? array[index] : undefined;
};

module.exports = getRandomValueInArray;
