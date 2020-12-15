module.exports = {
  title: "checkIsObjectEmpty",
  description: "Check the object is empty or not.",
  arguments: `
    object = {}; // required
  `,
  usage: `
    checkIsObjectEmpty({})
    // true

    checkIsObjectEmpty({a:1})
    // false
  `,
  kind: "Object"
};
