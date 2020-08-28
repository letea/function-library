// node modules
const userAgents = require("@letea/useragents");

// local modules - jest
const runTest = require("./jest/runTest");
const mockUserAgent = require("./jest/mockUserAgent");

// local files
const checkIsiOS = require("./checkIsiOS");

const testCases = [
  {
    describe: "should return true",
    it: "if userAgent is iOS",
    toBe: true,
    cases: userAgents.filter(userAgent => {
      return userAgent.os === "ios";
    })
  },
  {
    describe: "should return false",
    it: "if userAgent is not iOS",
    toBe: false,
    cases: userAgents.filter(userAgent => {
      return userAgent.os !== "ios";
    })
  }
];

const handler = ({ testCase, item }) => {
  mockUserAgent(item.userAgent);
  expect(checkIsiOS()).toBe(testCase.toBe);
};

runTest({ testCases, handler });
