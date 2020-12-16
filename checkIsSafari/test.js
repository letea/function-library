// node modules
const userAgents = require("@letea/useragents");

// local modules - jest
const runTest = require("../.jest/runTest");

// local files
const checkIsSafari = require("../checkIsSafari");
const setUserAgent = require("../setUserAgent");

const testCases = [
  {
    describe: "should return true",
    it: "if userAgent is Safari Browser",
    toBe: true,
    cases: userAgents.filter(userAgent => {
      return userAgent.browser === "safari";
    })
  },
  {
    describe: "should return false",
    it: "if userAgent is not Safari Browser",
    toBe: false,
    cases: userAgents.filter(userAgent => {
      return userAgent.browser !== "safari";
    })
  }
];

const handler = ({ testCase, item }) => {
  setUserAgent(item.userAgent);
  expect(checkIsSafari()).toBe(testCase.toBe);
};

runTest({ testCases, handler });

module.exports = {
  testCases,
  handler
};
