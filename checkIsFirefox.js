const checkIsFirefox = () => {
  if (!window || !navigator) {
    throw new Error("No window or navigator founded.");
  }

  return !!navigator.userAgent.match(/firefox|fxios/i);
};

export default checkIsFirefox;
