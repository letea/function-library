const setUserAgent = (value) => {
  if (!window || !navigator) {
    throw new Error("No window or navigator founded.");
  }

  Object.defineProperty(window.navigator, "userAgent", {
    value,
    configurable: true
  });
};

module.exports = setUserAgent;
