module.exports = {
  title: "getURLWithoutTrackingParameters",
  description:
    "To filter URL's search(Tracking Parameters), including Google, Facebook for now.",
  arguments: `
    url = ""; // required
  `,
  usage: `
    getURLWithoutTrackingParameters("http://google.com/?utm_source=value&utm_medium=value&utm_campaign=value&utm_term=value&utm_content=value",);
    // "http://google.com/"

    getURLWithoutTrackingParameters("http://facebook.com/?ad_id=value&adset_id=value&campaign_id=value&ad_name=value&adset_name=value&campaign_name=value&placement=value&site_source_name=value",);
    // "http://facebook.com/"

    getURLWithoutTrackingParameters("http://google.com/?a=123&utm_source=value&utm_medium=value&utm_campaign=value&utm_term=value&utm_content=value",);
    // "http://google.com/?a=123"
  `,
  references: [
    {
      title: "Google: Campaign URL Builder",
      url: "https://ga-dev-tools.appspot.com/campaign-url-builder/"
    },
    {
      title: "Facebook Business: 關於網址參數",
      url: "https://www.facebook.com/business/help/1016122818401732"
    }
  ],
  kind: "URL"
};
