const checkIsWindowLoaded = () => {
  return document.readyState === "complete";
};

export default checkIsWindowLoaded;
