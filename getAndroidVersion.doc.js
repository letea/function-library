module.exports = {
  title: "getAndroidVersion",
  description:
    'Get Android Version from the window.navigator.userAgent. If the userAgent is not iOS or not found, it will return "".',
  usage: `
    // User-Agent: Mozilla/5.0 (Linux; Android 8.0.0; HTC_M10h) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.136 Mobile Safari/537.36
    getAndroidVersion();
    // "8.0.0"

    // User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/79.0.3945.73 Mobile/15E148 Safari/604.1
    getAndroidVersion();
    // ""
  `,
  kind: "User-Agent"
};
