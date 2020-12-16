module.exports = {
  title: "checkIsSamsungBrowser",
  description: "Check is Samsung Browser by the window.navigator.userAgent.",
  usage: `
    // Mozilla/5.0 (Linux; Android 9; SAMSUNG SM-N9750) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/10.2 Chrome/71.0.3578.99 Mobile Safari/537.36
    checkIsSamsugnBrowser();
    // true

    // Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 Edg/80.0.361.48
    checkIsSamsugnBrowser();
    // false
  `,
  isBrowserOnly: true,
  kind: "User-Agent"
};
