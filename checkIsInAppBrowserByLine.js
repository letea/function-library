const checkIsInAppBrowserByFacebook = () => {
  if (!window || !navigator) {
    throw new Error("No window or navigator founded.");
  }

  return !!navigator.userAgent.match(/line/i);
};

module.exports = checkIsInAppBrowserByFacebook;
