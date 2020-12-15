module.exports = {
  title: "checkIsAndroid",
  description: "Check is Android by the window.navigator.userAgent",
  usage: `
    // Mozilla/5.0 (Linux; Android 8.0.0; HTC_M10h) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.136 Mobile Safari/537.36
    checkIsAndroid();
    // true

    // Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/79.0.3945.73 Mobile/15E148 Safari/604.1
    checkIsAndroid();
    // false
  `,
  kind: "User-Agent"
};
