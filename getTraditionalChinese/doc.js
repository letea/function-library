module.exports = {
  title: "getTraditionalChinese",
  description: "Transform Simple Chinese into Traditional Chinese.",
  arguments: `
    value = ""; // required
  `,
  usage: `
    getTraditionalChinese("繁体字、简体字");
    // "繁體字、簡體字"
  `,
  references: [
    {
      title: "繁簡轉換",
      url: "https://github.com/mollykannn/translate-big5-gbk.git"
    }
  ],
  kind: "String"
};
