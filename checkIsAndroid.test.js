// node modules
const userAgents = require("@letea/useragents");

// local modules - jest
const runTest = require("./jest/runTest");
const mockUserAgent = require("./jest/mockUserAgent");

// local files
const checkIsAndroid = require("./checkIsAndroid");

const testCases = [
  {
    describe: "should return true",
    it: "if userAgent is android",
    toBe: true,
    cases: userAgents.filter(userAgent => {
      return userAgent.os === "android";
    })
  },
  {
    describe: "should return false",
    it: "if userAgent is not android",
    toBe: false,
    cases: userAgents.filter(userAgent => {
      return userAgent.os !== "android";
    })
  }
];

const handler = ({ testCase, item }) => {
  mockUserAgent(item.userAgent);
  expect(checkIsAndroid()).toBe(testCase.toBe);
};

runTest({ testCases, handler });
