// local modules - jest
import runTest from "./jest/runTest";

// local files
import getShareToLineLink from "./getShareToLineLink";

const testCases = [
  {
    describe: "should return a link",
    it: "if the argument is not empty string",
    handler: () => {
      const url = "https://google.com";
      const message = "OK Google";
      const link = getShareToLineLink({ url, message });
      expect(link).toContain(url);
      expect(link).toContain(encodeURI(message));
    }
  },
  {
    describe: "should return a link",
    it:
      "if there is no argument, it will return with location origin and pathname",
    handler: () => {
      delete window.location;
      window.location = {
        origin: "https://google.com/",
        pathname: "tw/",
        href: "https://google.com/tw/"
      };
      const url = getShareToLineLink();
      expect(url).toContain(window.location.href);
    }
  }
];

runTest({ testCases });
