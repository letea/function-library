module.exports = {
  title: "checkIsInAppBrowserByFacebook",
  description:
    "Check is InAppBrowser by Facebook using window.navigator.userAgent.",
  usage: `
  // Mozilla/5.0 (Linux; Android 8.0.0; HTC_M10h Build/OPR1.170623.027; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/79.0.3945.136 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/255.0.0.33.121;]
    checkIsInAppBrowserByFacebook();
    // true

    // Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Safari Line/10.0.2
    checkIsInAppBrowserByFacebook();
    // false
  `,
  kind: "User-Agent"
};
