module.exports = {
  title: "checkIsEmailValid",
  description: "Check email format is valid or not.",
  arguments: `
    email = ""; // required
  `,
  usage: `
    checkIsEmailValid("geon@ihateregex.io");
    checkIsEmailValid("test@gmail.com");
    checkIsEmailValid("mail@test.org");
    checkIsEmailValid("mail@testing.com");
    // true

    checkIsEmailValid();
    checkIsEmailValid("hello@");
    checkIsEmailValid("@test");
    checkIsEmailValid("email@gmail");
    checkIsEmailValid("theproblem@");
    // false
  `,
  references: [
    {
      title: "Regex Rule",
      url: "https://ihateregex.io/expr/email-2"
    }
  ],
  kind: "String"
};
