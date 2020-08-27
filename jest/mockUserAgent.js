const mockUserAgent = value => {
  if (!window || !navigator) {
    throw new Error("No window or navigator founded.");
  }

  Object.defineProperty(window.navigator, "userAgent", {
    value,
    configurable: true
  });
};

export default mockUserAgent;
