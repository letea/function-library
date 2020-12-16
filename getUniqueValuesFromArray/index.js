// local files
const checkIsArray = require("../checkIsArray");

const getUniqueValuesFromArray = (array = []) => {
  if (!checkIsArray(array)) {
    throw new Error("The parameter is not array.");
  }

  const uniqueValues = [];
  array.forEach(item => {
    let count = 0;
    array.forEach(otherItem => {
      if (item === otherItem) {
        count += 1;
      }
    });
    if (count === 1) {
      uniqueValues.push(item);
    }
  });
  return uniqueValues;
};

module.exports = getUniqueValuesFromArray;
