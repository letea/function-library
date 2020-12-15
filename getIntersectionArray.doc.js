module.exports = {
  title: "getIntersectionArray",
  description: "Get an intersection array.",
  arguments: `
    arguments = {
      array1: [], // required
      array2: [] // required
    }
  `,
  usage: `
    getIntersectionArray({
      array1: ["a", "b", "c"],
      array2: ["b", "c", "d", "e", "f"]
    })
    // ["b", "c"]
  `,
  references: [
    {
      title: "一些JS 數組精簡技巧，要記好筆記了",
      url: "https://segmentfault.com/a/1190000021840363"
    }
  ],
  kind: "Array"
};
