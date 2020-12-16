const checkIsWindows = () => {
  if (!window || !navigator) {
    throw new Error("No window or navigator founded.");
  }

  return !!navigator.userAgent.match(/windows/i);
};

module.exports = checkIsWindows;
