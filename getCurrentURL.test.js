// local modules - jest
import runTest from "./jest/runTest";

// local files
import getCurrentURL from "./getCurrentURL";

const preHandler = () => {
  delete window.location;
  window.location = {
    origin: "https://google.com/",
    pathname: "tw/",
    search:
      "?a=%E5%80%BC&utm_source=value&utm_medium=value&utm_campaign=value&utm_term=value&utm_content=value&ad_id=value&adset_id=value&campaign_id=value&ad_name=value&adset_name=value&campaign_name=value&placement=value&site_source_name=value",
    searchWithoutTracking: "?a=%E5%80%BC",
    href:
      "https://google.com/tw/?a=%E5%80%BC&utm_source=value&utm_medium=value&utm_campaign=value&utm_term=value&utm_content=value&ad_id=value&adset_id=value&campaign_id=value&ad_name=value&adset_name=value&campaign_name=value&placement=value&site_source_name=value"
  };

  return window.location;
};

const testCases = [
  {
    describe: "should return a link",
    it: "equal window.location.href",
    handler: () => {
      const { href } = preHandler();
      expect(getCurrentURL()).toBe(href);
    }
  },
  {
    describe: "should return a link",
    it: "without search",
    handler: () => {
      const { origin, pathname } = preHandler();
      expect(
        getCurrentURL({
          hasSearch: false
        })
      ).toBe(`${origin}${pathname}`);
    }
  },
  {
    describe: "should return a link",
    it: "without tracking code",
    handler: () => {
      const { origin, pathname, searchWithoutTracking } = preHandler();
      expect(
        getCurrentURL({
          hasSearch: true,
          trimTracking: true
        })
      ).toBe(`${origin}${pathname}${searchWithoutTracking}`);
    }
  }
];

runTest({ testCases });
