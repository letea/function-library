// local modules - jest
const runTest = require("../.jest/runTest");

// local files
const checkIsFullscreen = require("../checkIsFullscreen");
const setDocumentAttribute = require("../setDocumentAttribute");

const presetDocumentAttribute = () => {
  const attributes = ["fullScreen", "mozFullScreen", "webkitIsFullScreen"];
  attributes.forEach((attribute) => {
    setDocumentAttribute({
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
  presetDocumentAttribute();
  item &&
    setDocumentAttribute({
      attribute: item,
      value: true
    });
  expect(checkIsFullscreen()).toBe(testCase.toBe);
};

runTest({ testCases, handler });

module.exports = {
  testCases,
  handler
};
