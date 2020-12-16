const checkIsCanvasSupported = () => {
  const element = document.createElement("canvas");
  return !!(element.getContext && element.getContext("2d"));
};

module.exports = checkIsCanvasSupported;
