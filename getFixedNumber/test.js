// local modules - jest
const runTest = require("../.jest/runTest");

// local files
const getFixedNumber = require("../getFixedNumber");

const testCases = [
  {
    describe: "should return true",
    it: "if the result is expected",
    handler: () => {
      const number = getFixedNumber({ number: 10.11 });
      expect(Number.isInteger(number)).toBe(false);
      expect(number).toBe(10.11);
    }
  },
  {
    describe: "should return true",
    it: "if the result is expected",
    handler: () => {
      const number = getFixedNumber({ number: 3.1415926535, fixed: 5 });
      expect(number).toBe(3.14159);
    }
  }
];

runTest({ testCases });

module.exports = {
  testCases
};
