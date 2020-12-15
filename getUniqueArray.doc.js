module.exports = {
  title: "getUniqueArray",
  description: "Get a unique array.",
  arguments: `
    array = []; // required
  `,
  usage: `
    getUniqueArray([1, 2, 3, "a", "b", 2, "c", "a"]);
    // [1, 2, 3, "a", "b", "c"]
  `,
  references: [
    {
      title: "uniqueElements - 30 seconds of code",
      url: "https://www.30secondsofcode.org/js/s/unique-elements/"
    }
  ],
  kind: "Array"
};
