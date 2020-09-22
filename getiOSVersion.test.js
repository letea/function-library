// node modules
const userAgents = require("@letea/useragents");

// local modules - jest
const runTest = require("./jest/runTest");

// local files
const getiOSVersion = require("./getiOSVersion");
const setUserAgent = require("./setUserAgent");

const testCases = [
  {
    describe: "should return a number",
    it: "if userAgent is iOS browser",
    cases: userAgents.filter(userAgent => {
      return userAgent.os === "ios";
    }),
    handler: ({ item }) => {
      setUserAgent(item.userAgent);
      expect(getiOSVersion()).toBe(item.osVersion);
    }
  },
  {
    describe: "should return a empty string",
    it: "if userAgent is not iOS browser",
    toBe: false,
    cases: userAgents.filter(userAgent => {
      return userAgent.os !== "ios";
    }),
    handler: ({ item }) => {
      setUserAgent(item.userAgent);
      expect(getiOSVersion()).toBe("");
    }
  }
];

runTest({ testCases });

module.exports = {
  testCases
};
