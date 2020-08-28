// node modules
const userAgents = require("@letea/useragents");

// local modules - jest
const runTest = require("./jest/runTest");
const mockUserAgent = require("./jest/mockUserAgent");

// local files
const checkIsWindows = require("./checkIsWindows");

const testCases = [
  {
    describe: "should return true",
    it: "if userAgent is Windows",
    toBe: true,
    cases: userAgents.filter(userAgent => {
      return userAgent.os === "windows";
    })
  },
  {
    describe: "should return false",
    it: "if userAgent is not Windows",
    toBe: false,
    cases: userAgents.filter(userAgent => {
      return userAgent.os !== "windows";
    })
  }
];

const handler = ({ testCase, item }) => {
  mockUserAgent(item.userAgent);
  expect(checkIsWindows()).toBe(testCase.toBe);
};

runTest({ testCases, handler });
