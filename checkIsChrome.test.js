// node modules
const userAgents = require("@letea/useragents");

// local modules - jest
const runTest = require("./jest/runTest");
const mockUserAgent = require("./jest/mockUserAgent");

// local files
const checkIsChrome = require("./checkIsChrome");

const testCases = [
  {
    describe: "should return true",
    it: "if userAgent is Chrome Browser",
    toBe: true,
    cases: userAgents.filter(userAgent => {
      return userAgent.browser === "chrome";
    })
  },
  {
    describe: "should return false",
    it: "if userAgent is not Chrome Browser",
    toBe: false,
    cases: userAgents.filter(userAgent => {
      return userAgent.browser !== "chrome";
    })
  }
];

const handler = ({ testCase, item }) => {
  mockUserAgent(item.userAgent);
  expect(checkIsChrome()).toBe(testCase.toBe);
};

runTest({ testCases, handler });
