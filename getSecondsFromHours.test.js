// local modules - jest
const runTest = require("./jest/runTest");

// local files
const getSecondsFromHours = require("./getSecondsFromHours");

const testCases = [
  {
    describe: "should return 3600 seconds",
    it: "if is 1 hour",
    toBe: 3600,
    cases: [1]
  },
  {
    describe: "should throw an exception",
    it: "if there is invalid argument",
    cases: [[], {}, null, undefined],
    handler: ({ item }) => {
      expect(() => {
        getSecondsFromHours(item);
      }).toThrow();
    }
  }
];

const handler = ({ testCase, item }) => {
  expect(getSecondsFromHours(item)).toBe(testCase.toBe);
};

runTest({ testCases, handler });
