module.exports = {
  title: "checkIsFunction",
  description: "Check data type is function or not.",
  arguments: `
    value // required, any type is accepted.
  `,
  usage: `
    checkIsFunction(() => {});
    // true

    checkIsFunction(function() {});
    // true

    checkIsFunction("function");
    // false
  `,
  kind: "Function"
};
