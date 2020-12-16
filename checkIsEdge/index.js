const checkIsEdge = () => {
  if (!window || !navigator) {
    throw new Error("No window or navigator founded.");
  }

  return !!navigator.userAgent.match(/edg/i);
};

module.exports = checkIsEdge;
