// local modules - jest
import runTest from "../.jest/runTest.js";

// local files
import getGoogleCloudStorageFile from "../getGoogleCloudStorageFile/index.js";

const testCases = [
  {
    describe: "should return a file url.",
    it: "if argument is a valid path",
    toBe:
      "https://storage.googleapis.com/storybook.letea.me/issue-img-webp.jpg",
    cases: ["storybook.letea.me/issue-img-webp.jpg"]
  },
  {
    describe: "should return an empty string",
    it: "if argument is not string",
    toBe: "",
    cases: [1, {}, []]
  }
];

const handler = ({ testCase, item }) => {
  expect(getGoogleCloudStorageFile(item)).toBe(testCase.toBe);
};

runTest({ testCases, handler });

export { testCases,
  handler
 };
