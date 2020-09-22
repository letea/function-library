// node modules
const userAgents = require("@letea/useragents");

// local modules - jest
const runTest = require("./jest/runTest");

// local files
const checkIsSamsungBrowser = require("./checkIsSamsungBrowser");
const setUserAgent = require("./setUserAgent");

const testCases = [
  {
    describe: "should return true",
    it: "if userAgent is Samsung Browser",
    toBe: true,
    cases: userAgents.filter(userAgent => {
      return userAgent.browser === "samsung";
    })
  },
  {
    describe: "should return false",
    it: "if userAgent is not Samsung Browser",
    toBe: false,
    cases: userAgents.filter(userAgent => {
      return userAgent.browser !== "samsung";
    })
  }
];

const handler = ({ testCase, item }) => {
  setUserAgent(item.userAgent);
  expect(checkIsSamsungBrowser()).toBe(testCase.toBe);
};

runTest({ testCases, handler });

module.exports = {
  testCases,
  handler
};
