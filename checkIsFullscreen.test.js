// local modules - jest
import runTest from "./jest/runTest";
import mockDocument from "./jest/mockDocument";

// local files
import checkIsFullscreen from "./checkIsFullscreen";

const preMockDocument = () => {
  const attributes = ["fullScreen", "mozFullScreen", "webkitIsFullScreen"];
  attributes.forEach(attribute => {
    mockDocument({
      attribute,
      value: false
    });
  });
};

const testCases = [
  {
    describe: "should return true",
    it: "if the document.fullScreen is true",
    toBe: true,
    cases: ["fullScreen"]
  },
  {
    describe: "should return true",
    it: "if the document.mozFullScreen is true",
    toBe: true,
    cases: ["mozFullScreen"]
  },
  {
    describe: "should return true",
    it: "if the document.webkitIsFullScreen is true",
    toBe: true,
    cases: ["webkitIsFullScreen"]
  },
  {
    describe: "should return false",
    it: "if the document.fullScreen is false",
    toBe: false
  },
  {
    describe: "should return false",
    it: "if the document.mozFullScreen is false",
    toBe: false
  },
  {
    describe: "should return false",
    it: "if the document.webkitIsFullScreen is false",
    toBe: false
  }
];

const handler = ({ testCase, item }) => {
  preMockDocument();
  item &&
    mockDocument({
      attribute: item,
      value: true
    });
  expect(checkIsFullscreen()).toBe(testCase.toBe);
};

runTest({ testCases, handler });
