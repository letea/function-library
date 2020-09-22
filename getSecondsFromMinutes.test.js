// local modules - jest
const runTest = require("./jest/runTest");

// local files
const getSecondsFromMinutes = require("./getSecondsFromMinutes");

const testCases = [
  {
    describe: "should return 60 seconds",
    it: "if is 1 minute",
    toBe: 60,
    cases: [1]
  },
  {
    describe: "should throw an exception",
    it: "if there is invalid argument",
    cases: [[], {}, null, undefined],
    handler: ({ item }) => {
      expect(() => {
        getSecondsFromMinutes(item);
      }).toThrow();
    }
  }
];

const handler = ({ testCase, item }) => {
  expect(getSecondsFromMinutes(item)).toBe(testCase.toBe);
};

runTest({ testCases, handler });

module.exports = {
  testCases,
  handler
};
