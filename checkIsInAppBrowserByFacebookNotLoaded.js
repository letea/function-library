// local modules - functions
const checkIsInAppBrowserByFacebook = require("./checkIsInAppBrowserByFacebook");

const checkIsInAppBrowserByFacebookNotLoaded = () => {
  return (
    checkIsInAppBrowserByFacebook() && window.screen.width !== window.innerWidth
  );
};

module.exports = checkIsInAppBrowserByFacebookNotLoaded;
