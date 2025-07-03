// node modules
const userAgents = require("@letea/useragents");

// local modules - jest
import runTest from "../.jest/runTest.js";

// local files
import getAndroidVersion from "../getAndroidVersion/index.js";
import setUserAgent from "../setUserAgent/index.js";

const testCases = [
  {
    describe: "should return true",
    it: "if userAgent is Android browser",
    cases: userAgents.filter((userAgent) => {
      return userAgent.os === "android";
    }),
    handler: ({ item }) => {
      setUserAgent(item.userAgent);
      expect(getAndroidVersion()).toBe(item.osVersion);
    }
  },
  {
    describe: "should return false",
    it: "if userAgent is not Android browser",
    cases: userAgents.filter((userAgent) => {
      return userAgent.os !== "android";
    }),
    handler: ({ item }) => {
      setUserAgent(item.userAgent);
      expect(getAndroidVersion()).toBe("");
    }
  }
];

runTest({ testCases });

export { testCases
 };
