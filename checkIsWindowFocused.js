const checkIsWindowFocused = () => {
  return document && document.hasFocus && document.hasFocus();
};

export default checkIsWindowFocused;
