// local files
import checkIsObject from "../checkIsObject/index.js";

const checkIsObjectEmpty = (object) => {
  if (!checkIsObject(object)) {
    throw new Error(`The parameter is not an object.`);
  }

  return Object.keys(object).length === 0;
};

export default checkIsObjectEmpty;
