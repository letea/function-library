// local modules - jest
import runTest from "../.jest/runTest.js";

// local files
import getTraditionalChinese from "../getTraditionalChinese/index.js";

const testCases = [
  {
    describe: "should return traditional chinese",
    it: "if the argument is simple chinese",
    toBe: "繁體字、簡體字",
    cases: ["繁体字、简体字"]
  }
];

const handler = ({ testCase, item }) => {
  expect(getTraditionalChinese(item)).toEqual(testCase.toBe);
};

runTest({ testCases, handler });

export { testCases,
  handler
 };
