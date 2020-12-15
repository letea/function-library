module.exports = {
  title: "checkIsiPhone",
  description: "Check is iPhone by the window.navigator.userAgent.",
  usage: `
    // Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/79.0.3945.73 Mobile/15E148 Safari/604.1
    checkIsiPhone();
    // true

    // Mozilla/5.0 (iPad; CPU OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.4 Mobile/15E148 Safari/604.1
    checkIsiPhone();
    // false
  `,
  kind: "User-Agent"
};
