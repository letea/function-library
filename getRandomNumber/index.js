// local files
const checkIsNumber = require("../checkIsNumber");

const defaultProps = {
  maxNumber: 0,
  minNumber: 0,
  isFloat: false
};

const getRandomNumber = (props = defaultProps) => {
  const { maxNumber, minNumber, isFloat } = Object.assign(
    {},
    defaultProps,
    props
  );

  if (!checkIsNumber(minNumber)) {
    throw new Error("minNumber should be a number.");
  }

  if (!checkIsNumber(maxNumber)) {
    throw new Error("maxNumber should be a number.");
  }

  if (minNumber >= maxNumber) {
    throw new Error("minNumber should not be equal or greater than maxNumber");
  }

  const number = minNumber + Math.random() * (maxNumber - minNumber);
  return isFloat ? number : Math.round(number);
};

module.exports = getRandomNumber;
