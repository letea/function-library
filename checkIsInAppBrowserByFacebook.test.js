// node modules
const userAgents = require("@letea/useragents");

// local modules - jest
const runTest = require("./jest/runTest");

// local files
const checkIsInAppBrowserByFacebook = require("./checkIsInAppBrowserByFacebook");
const setUserAgent = require("./setUserAgent");

const testCases = [
  {
    describe: "should return true",
    it: "if userAgent is InApp Browser by Facebook",
    toBe: true,
    cases: userAgents.filter(userAgent => {
      return userAgent.browser === "facebook";
    })
  },
  {
    describe: "should return false",
    it: "if userAgent is not InApp Browser By Facebook",
    toBe: false,
    cases: userAgents.filter(userAgent => {
      return userAgent.browser !== "facebook";
    })
  }
];

const handler = ({ testCase, item }) => {
  setUserAgent(item.userAgent);
  expect(checkIsInAppBrowserByFacebook()).toBe(testCase.toBe);
};

runTest({ testCases, handler });

module.exports = {
  testCases,
  handler
};
