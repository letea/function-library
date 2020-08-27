// local modules - jest
import runTest from "./jest/runTest";

// local files
import getShareToFacebookLink from "./getShareToFacebookLink";

const testCases = [
  {
    describe: "should return a link",
    it: "if the argument is not empty string",
    handler: () => {
      const url = "https://google.com";
      expect(getShareToFacebookLink(url)).toContain(url);
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
      const url = getShareToFacebookLink();
      expect(url).toContain(window.location.href);
    }
  }
];

runTest({ testCases });
