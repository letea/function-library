module.exports = {
  title: "checkIsWindowFocused",
  description: "Check Window is focused or not.",
  usage: `
    checkIsWindowFocused();
    // true (when window has focus actually.)
  `,
  references: [
    {
      title: "Document.hasFocus() - Web APIs | MDN",
      url: "https://developer.mozilla.org/en-US/docs/Web/API/Document/hasFocus"
    }
  ],
  isBrowserOnly: true,
  kind: "Window"
};
