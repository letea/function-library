const checkIsBrowser = () => {
  return ![typeof window, typeof document].includes("undefined");
};

module.exports = checkIsBrowser;
