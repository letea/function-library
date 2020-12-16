// local files
const checkIsArray = require("../checkIsArray");
const getUniqueArray = require("../getUniqueArray");

const getDuplicateValuesFromArray = (array = []) => {
  if (!checkIsArray(array)) {
    throw new Error("The parameter is not array.");
  }

  const duplicateValues = [];
  array.forEach(item => {
    let count = 0;
    array.forEach(otherItem => {
      if (item === otherItem) {
        count += 1;
      }
    });
    if (count > 1) {
      duplicateValues.push(item);
    }
  });
  return getUniqueArray(duplicateValues);
};

module.exports = getDuplicateValuesFromArray;
