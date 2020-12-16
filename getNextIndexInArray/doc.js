module.exports = {
  title: "getNextIndexInArray",
  description:
    "Set an array and index to get the next index. Using isLoop to get the first index if the index of input is the last one.",
  arguments: `
    arguments = {
      array: [], // required
      index: 0, // optional
      isLoop: false // optional
    }
  `,
  usage: `
    const array = ["a", "b", "c", "d", "e"];

    getNextIndexInArray({
      array,
      index: 2
    })
    // 3

    getNextIndexInArray({
      array,
      index: 4
    })
    // -1

    getNextIndexInArray({
      array,
      index: 4,
      isLoop: true
    })
    // 0
  `,
  kind: "Array"
};
