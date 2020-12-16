// local files
const checkIsArray = require("../checkIsArray");

const defaultProps = {
  array1: [],
  array2: []
};

const getIntersectionArray = (props = defaultProps) => {
  const { array1, array2 } = { ...defaultProps, ...props };

  if (
    !checkIsArray(array1) ||
    !checkIsArray(array2) ||
    array1.length === 0 ||
    array2.length === 0
  ) {
    console.warn(`Some of parameters are not valid.`, props);
    return [];
  }

  return [...new Set(array1)].filter(item => array2.includes(item));
};

module.exports = getIntersectionArray;
