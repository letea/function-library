// local modules - jest
const runTest = require("./jest/runTest");

// local files
const getHoursFromSeconds = require("./getHoursFromSeconds");

const testCases = [
  {
    describe: "should return 1 hour",
    it: "if is 3600 seconds",
    toBe: 1,
    cases: [3600]
  },
  {
    describe: "should throw an exception",
    it: "if there is invalid argument",
    cases: [[], {}, null, undefined],
    handler: ({ item }) => {
      expect(() => {
        getHoursFromSeconds(item);
      }).toThrow();
    }
  }
];

const handler = ({ testCase, item }) => {
  expect(getHoursFromSeconds(item)).toBe(testCase.toBe);
};

runTest({ testCases, handler });
