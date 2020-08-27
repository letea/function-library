// local modules - jest
import runTest from "./jest/runTest";

// local files
import checkIsAbsoluteURL from "./checkIsAbsoluteURL";

const testCases = [
  {
    describe: "should return true",
    it: "if the parameter is absolute URL.",
    toBe: true,
    cases: ["https://google.com", "ftp://www.myserver.net"]
  },
  {
    describe: "should return false",
    it: "if the parameter is relative URL",
    toBe: false,
    cases: ["/foo", "/foo/bar"]
  }
];

const handler = ({ testCase, item }) => {
  expect(checkIsAbsoluteURL(item)).toBe(testCase.toBe);
};

runTest({ testCases, handler });
