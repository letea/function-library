// local modules - functions
import checkIsInAppBrowserByFacebook from "../checkIsInAppBrowserByFacebook/index.js";

const checkIsInAppBrowserByFacebookNotLoaded = () => {
  return (
    checkIsInAppBrowserByFacebook() && window.screen.width !== window.innerWidth
  );
};

export default checkIsInAppBrowserByFacebookNotLoaded;
