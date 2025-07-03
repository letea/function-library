// node modules
const userAgents = require("@letea/useragents");

// local modules - jest
import runTest from "../.jest/runTest.js";

// local files
import checkIsInAppBrowserByFacebook from "../checkIsInAppBrowserByFacebook/index.js";
import setUserAgent from "../setUserAgent/index.js";

const testCases = [
  {
    describe: "should return true",
    it: "if userAgent is InApp Browser by Facebook",
    toBe: true,
    cases: userAgents.filter((userAgent) => {
      return userAgent.browser === "facebook";
    })
  },
  {
    describe: "should return false",
    it: "if userAgent is not InApp Browser By Facebook",
    toBe: false,
    cases: userAgents.filter((userAgent) => {
      return userAgent.browser !== "facebook";
    })
  }
];

const handler = ({ testCase, item }) => {
  setUserAgent(item.userAgent);
  expect(checkIsInAppBrowserByFacebook()).toBe(testCase.toBe);
};

runTest({ testCases, handler });

export { testCases,
  handler
 };
