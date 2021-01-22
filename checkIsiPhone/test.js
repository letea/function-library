// node modules
const userAgents = require("@letea/useragents");

// local modules - jest
const runTest = require("../.jest/runTest");

// local files
const checkIsiPhone = require("../checkIsiPhone");
const setUserAgent = require("../setUserAgent");

const testCases = [
  {
    describe: "should return true",
    it: "if userAgent is iPhone",
    toBe: true,
    cases: userAgents.filter((userAgent) => {
      return !!userAgent.device.match(/iphone/g);
    })
  },
  {
    describe: "should return false",
    it: "if userAgent is not iPhone",
    toBe: false,
    cases: userAgents.filter((userAgent) => {
      return !userAgent.device.match(/iphone/g);
    })
  }
];

const handler = ({ testCase, item }) => {
  setUserAgent(item.userAgent);
  expect(checkIsiPhone()).toBe(testCase.toBe);
};

runTest({ testCases, handler });

module.exports = {
  testCases,
  handler
};
