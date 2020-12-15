module.exports = {
  title: "getShareToLineLink",
  description: "Get a link that can direct to the Line Share Page.",
  arguments: `
    arguments = {
      url: "", // optional, if empty, it's will using location.href.
      message: "" // optional
    }
  `,
  usage: `
    getShareToLineLink();
    // "http://line.naver.jp/R/msg/text/?%0D%0A{location.href}"

    getShareToLineLink({url: "https://google.com", message: "OK Google"})
    // "http://line.naver.jp/R/msg/text/?OK%20Google%0D%0Ahttps://google.com"
  `,
  references: [
    {
      title: "Line Social Plugins",
      url: "https://media.line.me/zh_TW/how_to_install#lineitbutton"
    }
  ],
  isBrowserOnly: true,
  kind: "URL"
};
