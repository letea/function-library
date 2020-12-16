module.exports = {
  title: "checkIsFirefox",
  description: "Check is Firefox by the window.navigator.userAgent.",
  usage: `
    // Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:72.0) Gecko/20100101 Firefox/72.0
    checkIsFirefox();
    // true

    // Mozilla/5.0 (iPad; CPU OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0 EdgiOS/44.11.15 Mobile/15E148 Safari/605.1.15
    checkIsFirefox();
    // false
  `,
  isBrowserOnly: true,
  kind: "User-Agent"
};
