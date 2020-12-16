module.exports = {
  title: "getSimpleChinese",
  description: "Transform Traditional Chinese into Simple Chinese.",
  arguments: `
    value = ""; // required
  `,
  usage: `
    getSimpleChinese("繁體字、簡體字");
    // "繁体字、简体字"
  `,
  references: [
    {
      title: "繁簡轉換",
      url: "https://github.com/mollykannn/translate-big5-gbk.git"
    }
  ],
  kind: "String"
};
