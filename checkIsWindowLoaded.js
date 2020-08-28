const checkIsWindowLoaded = () => {
  return document.readyState === "complete";
};

module.exports = checkIsWindowLoaded;
