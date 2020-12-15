module.exports = {
  title: "getStringify",
  description: "Transform any data into a string.",
  arguments: `
    value // required, any type is accepted.
  `,
  usage: `
    getStringify(123);
    // "123"

    getStringify({a:123, b:undefined, c:Infinity, d:NaN});
    // "{a:123, b:undefined, c:Infinity, d:NaN}"

    getStringify([123, 234, undefined, Infinity, NaN]);
    // "[123, 234, undefined, Infinity, NaN]"
  `,
  kind: "String"
};
