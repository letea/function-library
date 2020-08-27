// node modules
import userAgents from "@letea/useragents";

// local modules - jest
import runTest from "./jest/runTest";
import mockUserAgent from "./jest/mockUserAgent";

// local files
import getAndroidVersion from "./getAndroidVersion";

const testCases = [
  {
    describe: "should return true",
    it: "if userAgent is Android browser",
    cases: userAgents.filter(userAgent => {
      return userAgent.os === "android";
    }),
    handler: ({ item }) => {
      mockUserAgent(item.userAgent);
      expect(getAndroidVersion()).toBe(item.osVersion);
    }
  },
  {
    describe: "should return false",
    it: "if userAgent is not Android browser",
    cases: userAgents.filter(userAgent => {
      return userAgent.os !== "android";
    }),
    handler: ({ item }) => {
      mockUserAgent(item.userAgent);
      expect(getAndroidVersion()).toBe("");
    }
  }
];

runTest({ testCases });
