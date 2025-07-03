// node modules
const userAgents = require("@letea/useragents");

// local modules - jest
import runTest from "../.jest/runTest.js";

// local files
import checkIsiPad from "../checkIsiPad/index.js";
import setUserAgent from "../setUserAgent/index.js";

const testCases = [
  {
    describe: "should return true",
    it: "if userAgent is iPad",
    toBe: true,
    cases: userAgents.filter((userAgent) => {
      return !!userAgent.device.match(/ipad/g);
    })
  },
  {
    describe: "should return false",
    it: "if userAgent is not iPad",
    toBe: false,
    cases: userAgents.filter((userAgent) => {
      return !userAgent.device.match(/ipad/g);
    })
  }
];

const handler = ({ testCase, item }) => {
  setUserAgent(item.userAgent);
  expect(checkIsiPad()).toBe(testCase.toBe);
};

runTest({ testCases, handler });

export { testCases,
  handler
 };
