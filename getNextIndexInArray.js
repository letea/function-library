const defaultProps = {
  array: [],
  index: 0,
  isLoop: false
};

const getNextIndexInArray = (props = defaultProps) => {
  const { array, index, isLoop } = { ...defaultProps, ...props };

  if (array.length === 0) {
    throw new Error("Array has to have a item at least.");
  }

  if (index + 1 < 0) {
    return 0;
  }

  if (index + 1 >= array.length) {
    return isLoop ? 0 : -1;
  }

  return index + 1;
};

export default getNextIndexInArray;
