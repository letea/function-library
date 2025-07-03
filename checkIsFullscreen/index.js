const checkIsFullscreen = () => {
  if (!document) {
    throw new Error("There is no document.");
  }

  return (
    document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen
  );
};

export default checkIsFullscreen;
