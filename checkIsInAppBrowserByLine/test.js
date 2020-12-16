// node modules
const userAgents = require("@letea/useragents");

// local modules - jest
const runTest = require("../.jest/runTest");

// local files
const checkIsInAppBrowserByLine = require("../checkIsInAppBrowserByLine");
const setUserAgent = require("../setUserAgent");

const testCases = [
  {
    describe: "should return true",
    it: "if userAgent is InApp browser by Line",
    toBe: true,
    cases: userAgents.filter(userAgent => {
      return userAgent.browser === "line";
    })
  },
  {
    describe: "should return false",
    it: "if userAgent is not InApp browser by Line",
    toBe: false,
    cases: userAgents.filter(userAgent => {
      return userAgent.browser !== "line";
    })
  }
];

const handler = ({ testCase, item }) => {
  setUserAgent(item.userAgent);
  expect(checkIsInAppBrowserByLine()).toBe(testCase.toBe);
};

runTest({ testCases, handler });

module.exports = {
  testCases,
  handler
};
