const checkIsMac = () => {
  if (!window || !navigator) {
    throw new Error("No window or navigator founded.");
  }

  return !!navigator.userAgent.match(/macintosh/i);
};

export default checkIsMac;
