module.exports = {
  title: "checkIsChrome",
  description: "Check is Chrome by the window.navigator.userAgent.",
  usage: `
    // Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36
    checkIsChrome();
    // true

    // Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:72.0) Gecko/20100101 Firefox/72.0
    checkIsChrome();
    // false
  `,
  isBrowserOnly: true,
  kind: "User-Agent"
};
