// local files
import checkIsObject from "./checkIsObject";

const defaultProps = {
  object: {},
  keys: ""
};

const getObjectValue = (props = defaultProps) => {
  const { object, keys } = { ...defaultProps, ...props };

  if (!checkIsObject(object)) {
    console.warn("the parameter is not an object.");
    return;
  }

  try {
    const keyList = keys.split(".");
    let value = object;
    keyList.forEach(key => {
      const hasArray = key.match(/([a-zA-Z]+)\[([0-9]+)\]/i);
      if (hasArray) {
        const arrayKey = hasArray[1];
        const arrayIndex = hasArray[2];
        value = value[arrayKey][arrayIndex];
      } else {
        value = value[key];
      }
    });
    return value;
  } catch (e) {
    return;
  }
};

export default getObjectValue;
