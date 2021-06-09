module.exports = {
  title: "getFixedNumber",
  description: "Get a float number with fixed option.",
  arguments: `
    arguments = {
      number: 0,  // required.
      fixed: 0  // optional.
    }
  `,
  usage: `
    getFixedNumber({
      number: 3.1415926535,
      fixed: 5
    })
    // 3.14159
  `,
  kind: "Number"
};
