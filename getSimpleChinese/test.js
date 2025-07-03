// local modules - jest
import runTest from "../.jest/runTest.js";

// local files
import getSimpleChinese from "../getSimpleChinese/index.js";

const testCases = [
  {
    describe: "should return simple chinese",
    it: "if the argument is traditional chinese",
    toBe: "繁体字、简体字",
    cases: ["繁體字、簡體字"]
  }
];

const handler = ({ testCase, item }) => {
  expect(getSimpleChinese(item)).toEqual(testCase.toBe);
};

runTest({ testCases, handler });

export { testCases,
  handler
 };
