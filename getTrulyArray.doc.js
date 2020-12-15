module.exports = {
  title: "getTrulyArray",
  description: "Get an array with true values.",
  arguments: `
    array = []; // required
  `,
  usage: `
    const array = [0, "test", "", NaN, 9, true, undefined, false, Infinity, {}, []];

    getTrulyArray(array);
    // ["test", 9, true, Infinity, {}, []]
  `,
  notes: ["Infinity is a true value."],
  references: [
    {
      title: "一些JS 數組精簡技巧，要記好筆記了",
      url: "https://segmentfault.com/a/1190000021840363"
    }
  ],
  kind: "Array"
};
