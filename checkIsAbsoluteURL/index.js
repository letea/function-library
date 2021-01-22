const checkIsAbsoluteURL = (url) => {
  return /^[a-z][a-z0-9+.-]*:/.test(url);
};

module.exports = checkIsAbsoluteURL;

/*
  References:
  1. https://www.30secondsofcode.org/js/s/is-absolute-url/
*/
