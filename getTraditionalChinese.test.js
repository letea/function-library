// local modules - jest
const runTest = require("./jest/runTest");

// local files
const getTraditionalChinese = require("./getTraditionalChinese");

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

module.exports = {
  testCases,
  handler
};
