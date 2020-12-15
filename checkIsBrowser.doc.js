module.exports = {
  title: "checkIsBrowser",
  description:
    "Check an environment is a browser or not by window and document.",
  usage: `
    // Browser
    checkIsBrowser();
    // true

    // Node.js
    checkIsBrowser();
    // false
  `,
  references: [
    {
      title: "isBrowser - 30 seconds of code",
      url: "https://www.30secondsofcode.org/js/s/is-browser"
    }
  ],
  kind: "Browser"
};
