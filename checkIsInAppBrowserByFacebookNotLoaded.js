// local modules - functions
import checkIsInAppBrowserByFacebook from "./checkIsInAppBrowserByFacebook";

const checkIsInAppBrowserByFacebookNotLoaded = () => {
  return (
    checkIsInAppBrowserByFacebook() && window.screen.width !== window.innerWidth
  );
};

export default checkIsInAppBrowserByFacebookNotLoaded;
