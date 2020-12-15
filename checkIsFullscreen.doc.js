module.exports = {
  title: "checkIsFullscreen",
  description: "Check the browser is fullscreen or not.",
  usage: `
    // When Fullscreen
    checkIsFullscreen();
    // true

    // When Normal
    checkIsFullscreen();
    // false
  `,
  isBrowserOnly: true,
  kind: "Window"
};
