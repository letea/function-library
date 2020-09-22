// local modules - jest
const runTest = require("./jest/runTest");

// local files
const getMillisecondsFromSeconds = require("./getMillisecondsFromSeconds");

const testCases = [
  {
    describe: "should return 1000 milliseconds",
    it: "if is 1 second",
    toBe: 1000,
    cases: [1]
  },
  {
    describe: "should throw an exception",
    it: "if there is invalid argument",
    cases: [[], {}, null, undefined],
    handler: ({ item }) => {
      expect(() => {
        getMillisecondsFromSeconds(item);
      }).toThrow();
    }
  }
];

const handler = ({ testCase, item }) => {
  expect(getMillisecondsFromSeconds(item)).toBe(testCase.toBe);
};

runTest({ testCases, handler });

module.exports = {
  testCases,
  handler
};
