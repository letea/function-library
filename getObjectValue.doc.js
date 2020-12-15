module.exports = {
  title: "getObjectValue",
  description: "Get the value from an object, including multiple levels.",
  arguments: `
    arguments = {
      object: {}, // required
      keys: "" // required
    }
  `,
  usage: `
    const example = {
      a: 1,
      b: {
        c: 2,
        d: [3, { e: 4 }]
      }
    };

    getObjectValue({
      object: example,
      keys: "a"
    }) 
    // 1

    getObjectValue({
      object: example,
      keys: "b.c"
    })
    // 2

    getObjectValue({
      object: example,
      keys: "b.d[0]"
    })
    // 3

    getObjectValue({
      object: example,
      keys: "b.d[1].e"
    })
    // 4

    getObjectValue({
      object: example,
      keys: "b.d[1].e.f"
    })
    // undefined
  `,
  kind: "Object"
};
