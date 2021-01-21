module.exports = {
  title: "getStringWithSpaceBetweenHalfAndFullWidth",
  description: "Get a string with space between half and full with characters.",
  arguments: `
    text = ""; // required
  `,
  usage: `
    getStringWithSpaceBetweenHalfAndFullWidth("我是很busy，因為我很多things要do");
    // "我是很 busy，因為我很多 things 要 do"
  `,
  references: [
    {
      title: "為什麼你們就是不能加個空格呢？",
      url: "https://github.com/vinta/pangu.js"
    }
  ],
  kind: "String"
};
