// local files
import getURLWithoutTrackingParameters from "./getURLWithoutTrackingParameters";

const defaultProps = {
  hasSearch: true,
  trimTracking: false
};

const getCurrentURL = (props = defaultProps) => {
  const { hasSearch, trimTracking } = { ...defaultProps, ...props };
  const { origin, pathname, href } = window.location;

  if (!hasSearch) {
    return `${origin}${pathname}`;
  }

  if (trimTracking) {
    return getURLWithoutTrackingParameters(href);
  }

  return href;
};

export default getCurrentURL;
