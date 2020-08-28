const checkIsSamsungBrowser = () => {
  if (!window || !navigator) {
    throw new Error("No window or navigator founded.");
  }

  return !!navigator.userAgent.match(/samsungbrowser/i);
};

module.exports = checkIsSamsungBrowser;
