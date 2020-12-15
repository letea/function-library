module.exports = {
  title: "checkIsInAppBrowserByFacebookNotLoaded",
  description:
    "Facebook's InAppBrowser has a bug: window size is not correct before the window loaded. So we need to check is loaded or not.",
  usage: `
    checkIsInAppBrowserByFacebookNotLoaded();
    // true
  `,
  kind: "Browser"
};
