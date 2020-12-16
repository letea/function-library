// node modules
const userAgents = require("@letea/useragents");

// local modules - jest
const runTest = require("../.jest/runTest");

// local files
const checkIsAndroid = require("../checkIsAndroid");
const setUserAgent = require("../setUserAgent");

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
  setUserAgent(item.userAgent);
  expect(checkIsAndroid()).toBe(testCase.toBe);
};

runTest({ testCases, handler });

module.exports = {
  testCases,
  handler
};
