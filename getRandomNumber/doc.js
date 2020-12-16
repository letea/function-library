module.exports = {
  title: "getRandomNumber",
  description: "Get a random number.",
  arguments: `
    arguments = {
      maxNumber: 0,  // required, it should be greater than minNumber.
      minNumber: 0,  // optional.
      isFloat: false // optional, if is true, it will return a float number.
    }
  `,
  usage: `
    getRandomNumber({
      maxNumber: 10
    });
    // 6

    getRandomNumber({
      maxNumber: 10,
      minNumber: 0,
      isFloat: true
    });
    // 3.5476
  `,
  kind: "Number"
};
