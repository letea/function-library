module.exports = {
  title: "checkIsClipboardSupported",
  description: "Check the browser is supports the clipboard or not.",
  usage: `
    // When Browser support clipboard
    checkIsClipboardSupported();
    // true

    // When Browser is not support clipboard
    checkIsClipboardSupported();
    // false
  `,
  references: [{ title: "clipboard.js", url: "https://clipboardjs.com/" }],
  isBrowserOnly: true,
  kind: "Window"
};
