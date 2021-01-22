// node modules
const userAgents = require("@letea/useragents");

// local modules - jest
const runTest = require("../.jest/runTest");

// local files
const checkIsDesktop = require("../checkIsDesktop");
const setUserAgent = require("../setUserAgent");

const testCases = [
  {
    describe: "should return true",
    it: "if userAgent is Desktop",
    toBe: true,
    cases: userAgents.filter((userAgent) => {
      return !!userAgent.os.match(/(macos)|(windows)/i);
    })
  },
  {
    describe: "should return false",
    it: "if userAgent is not Desktop",
    toBe: false,
    cases: userAgents.filter((userAgent) => {
      return !userAgent.os.match(/(macos)|(windows)/i);
    })
  }
];

const handler = ({ testCase, item }) => {
  setUserAgent(item.userAgent);
  expect(checkIsDesktop()).toBe(testCase.toBe);
};

runTest({ testCases, handler });

module.exports = {
  testCases,
  handler
};
