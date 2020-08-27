const checkIsAbsoluteURL = url => {
  return /^[a-z][a-z0-9+.-]*:/.test(url);
};

export default checkIsAbsoluteURL;

/*
  References:
  1. https://www.30secondsofcode.org/js/s/is-absolute-url/
*/
