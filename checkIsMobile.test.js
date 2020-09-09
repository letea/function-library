// node modules
const userAgents = require("@letea/useragents");

// local modules - jest
const runTest = require("./jest/runTest");

// local files
const checkIsMobile = require("./checkIsMobile");
const setUserAgent = require("./setUserAgent");

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
  setUserAgent(item.userAgent);
  expect(checkIsMobile()).toBe(testCase.toBe);
};

runTest({ testCases, handler });
