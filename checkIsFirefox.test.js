// node modules
const userAgents = require("@letea/useragents");

// local modules - jest
const runTest = require("./jest/runTest");

// local files
const checkIsFirefox = require("./checkIsFirefox");
const setUserAgent = require("./setUserAgent");

const testCases = [
  {
    describe: "should return true",
    it: "if userAgent is Firefox Browser",
    toBe: true,
    cases: userAgents.filter(userAgent => {
      return userAgent.browser === "firefox";
    })
  },
  {
    describe: "should return false",
    it: "if userAgent is not Firefox Browser",
    toBe: false,
    cases: userAgents.filter(userAgent => {
      return userAgent.browser !== "firefox";
    })
  }
];

const handler = ({ testCase, item }) => {
  setUserAgent(item.userAgent);
  expect(checkIsFirefox()).toBe(testCase.toBe);
};

runTest({ testCases, handler });
