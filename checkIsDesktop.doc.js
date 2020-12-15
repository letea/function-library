module.exports = {
  title: "checkIsDesktop",
  description: "Check is Desktop Device by the window.navigator.userAgent.",
  usage: `
    // Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36
    checkIsDesktop();
    // true

    // Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36
    checkIsDesktop();
    // true

    // Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.4 Mobile/15E148 Safari/604.1
    checkIsDesktop();
    // false
  `,
  kind: "User-Agent"
};
