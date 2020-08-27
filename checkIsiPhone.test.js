// node modules
import userAgents from "@letea/useragents";

// local modules - jest
import runTest from "./jest/runTest";
import mockUserAgent from "./jest/mockUserAgent";

// local files
import checkIsiPhone from "./checkIsiPhone";

const testCases = [
  {
    describe: "should return true",
    it: "if userAgent is iPhone",
    toBe: true,
    cases: userAgents.filter(userAgent => {
      return !!userAgent.device.match(/iphone/g);
    })
  },
  {
    describe: "should return false",
    it: "if userAgent is not iPhone",
    toBe: false,
    cases: userAgents.filter(userAgent => {
      return !userAgent.device.match(/iphone/g);
    })
  }
];

const handler = ({ testCase, item }) => {
  mockUserAgent(item.userAgent);
  expect(checkIsiPhone()).toBe(testCase.toBe);
};

runTest({ testCases, handler });
