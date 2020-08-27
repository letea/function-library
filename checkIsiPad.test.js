// node modules
import userAgents from "@letea/useragents";

// local modules - jest
import runTest from "./jest/runTest";
import mockUserAgent from "./jest/mockUserAgent";

// local files
import checkIsiPad from "./checkIsiPad";

const testCases = [
  {
    describe: "should return true",
    it: "if userAgent is iPad",
    toBe: true,
    cases: userAgents.filter(userAgent => {
      return !!userAgent.device.match(/ipad/g);
    })
  },
  {
    describe: "should return false",
    it: "if userAgent is not iPad",
    toBe: false,
    cases: userAgents.filter(userAgent => {
      return !userAgent.device.match(/ipad/g);
    })
  }
];

const handler = ({ testCase, item }) => {
  mockUserAgent(item.userAgent);
  expect(checkIsiPad()).toBe(testCase.toBe);
};

runTest({ testCases, handler });
