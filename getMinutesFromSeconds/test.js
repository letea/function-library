// local modules - jest
import runTest from "../.jest/runTest.js";

// local files
import getMinutesFromSeconds from "../getMinutesFromSeconds/index.js";

const testCases = [
  {
    describe: "should return 1 minute",
    it: "if is 60 seconds",
    toBe: 1,
    cases: [60]
  },
  {
    describe: "should throw an exception",
    it: "if there is invalid argument",
    cases: [[], {}, null, undefined],
    handler: ({ item }) => {
      expect(() => {
        getMinutesFromSeconds(item);
      }).toThrow();
    }
  }
];

const handler = ({ testCase, item }) => {
  expect(getMinutesFromSeconds(item)).toBe(testCase.toBe);
};

runTest({ testCases, handler });

export { testCases,
  handler
 };
