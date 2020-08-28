/* eslint-disable */
const runHandler = ({ testCase, item, handler }) => {
  const config = { testCase, item };
  if (testCase.handler) {
    testCase.handler(config);
  } else if (handler) {
    handler(config);
  } else {
    throw new Error("No testCase.handler and handler");
  }
};

const runTest = ({ testCases, handler }) => {
  testCases.forEach(testCase => {
    describe(testCase.describe, () => {
      if (testCase.cases) {
        testCase.cases.forEach(item => {
          it(`${testCase.it} (${JSON.stringify(item)})`, () => {
            runHandler({ testCase, item, handler });
          });
        });
      } else {
        it(`${testCase.it}`, () => {
          runHandler({ testCase, handler });
        });
      }
    });
  });
};

module.exports = runTest;
