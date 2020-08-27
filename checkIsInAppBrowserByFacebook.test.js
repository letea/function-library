// node modules
import userAgents from "@letea/useragents";

// local modules - jest
import runTest from "./jest/runTest";
import mockUserAgent from "./jest/mockUserAgent";

// local files
import checkIsInAppBrowserByFacebook from "./checkIsInAppBrowserByFacebook";

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
  mockUserAgent(item.userAgent);
  expect(checkIsInAppBrowserByFacebook()).toBe(testCase.toBe);
};

runTest({ testCases, handler });
