module.exports = {
  title: "checkIsWindows",
  description: "Check is Windows by the window.navigator.userAgent.",
  usage: `
    // Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 Edg/80.0.361.48
    checkIsWindows();
    // true

    // Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.4 Safari/605.1.15
    checkIsWindows();
    // false
  `,
  kind: "User-Agent"
};
