// local files
import checkIsNumber from "../checkIsNumber/index.js";

const defaultProps = {
  number: 0,
  fixed: 0
};

const getFixedNumber = (props = defaultProps) => {
  const { number, fixed } = Object.assign({}, defaultProps, props);

  if (!checkIsNumber(number)) {
    throw new Error("number parameter should be a number.");
  }

  if (!checkIsNumber(fixed)) {
    throw new Error("fixed parameter should be a number.");
  }

  let fixedNumber = number;
  if (fixed > 0) {
    fixedNumber = fixedNumber.toFixed(fixed);
  }
  return Number.parseFloat(fixedNumber, 10);
};

export default getFixedNumber;
