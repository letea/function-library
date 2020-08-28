// node modules
const userAgents = require("@letea/useragents");

// local modules - jest
const runTest = require("./jest/runTest");
const mockUserAgent = require("./jest/mockUserAgent");

// local files
const checkIsMobile = require("./checkIsMobile");

const testCases = [
  {
    describe: "should return true",
    it: "if userAgent is mobile",
    toBe: true,
    cases: userAgents.filter(userAgent => {
      return !!userAgent.os.match(/android|ios/g);
    })
  },
  {
    describe: "should return false",
    it: "if userAgent is not mobile",
    toBe: false,
    cases: userAgents.filter(userAgent => {
      return !userAgent.os.match(/android|ios/g);
    })
  }
];

const handler = ({ testCase, item }) => {
  mockUserAgent(item.userAgent);
  expect(checkIsMobile()).toBe(testCase.toBe);
};

runTest({ testCases, handler });
