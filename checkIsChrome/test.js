// node modules
const userAgents = require("@letea/useragents");

// local modules - jest
const runTest = require("../.jest/runTest");

// local files
const checkIsChrome = require("../checkIsChrome");
const setUserAgent = require("../setUserAgent");

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
  setUserAgent(item.userAgent);
  expect(checkIsChrome()).toBe(testCase.toBe);
};

runTest({ testCases, handler });

module.exports = {
  testCases,
  handler
};
