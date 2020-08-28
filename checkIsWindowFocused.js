const checkIsWindowFocused = () => {
  return document && document.hasFocus && document.hasFocus();
};

module.exports = checkIsWindowFocused;
