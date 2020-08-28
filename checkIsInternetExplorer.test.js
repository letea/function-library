// node modules
const userAgents = require("@letea/useragents");

// local modules - jest
const runTest = require("./jest/runTest");
const mockUserAgent = require("./jest/mockUserAgent");

// local files
const checkIsInternetExplorer = require("./checkIsInternetExplorer");

const testCases = [
  {
    describe: "should return true",
    it: "if userAgent is Internet Explorer browser",
    toBe: true,
    cases: userAgents.filter(userAgent => {
      return !!userAgent.browser.match(/internet explorer/);
    })
  },
  {
    describe: "should return false",
    it: "if userAgent is not Internet Explorer browser",
    toBe: false,
    cases: userAgents.filter(userAgent => {
      return !userAgent.browser.match(/internet explorer/);
    })
  }
];

const handler = ({ testCase, item }) => {
  mockUserAgent(item.userAgent);
  expect(checkIsInternetExplorer()).toBe(testCase.toBe);
};

runTest({ testCases, handler });
