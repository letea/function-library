const checkIsiPad = () => {
  if (!window || !navigator || !document) {
    throw new Error("No window or navigator or document founded.");
  }

  return (
    !!navigator.userAgent.match(/ipad/i) ||
    (!!navigator.userAgent.match(/macintosh/i) && "ontouchend" in document)
  );
};

module.exports = checkIsiPad;
