module.exports = {
  title: "getCurrentURL",
  description:
    "Get current site's URL. For now can get URL without search or trim tracking parameters(Google & Facebook).",
  arguments: `
    arguments = {
      hasSearch: true, // optional.
      trimTracking: false // optional, if hasSearch is true then trimTracking will do nothing.
    }
  `,
  usage: `
    // if window.location.href is "https://google.com/tw/?a=%E5%80%BC&utm_source=value&utm_medium=value&utm_campaign=value&utm_term=value&utm_content=value&ad_id=value&adset_id=value&campaign_id=value&ad_name=value&adset_name=value&campaign_name=value&placement=value&site_source_name=value"
    getCurrentURL()
    // "https://google.com/tw/?a=%E5%80%BC&utm_source=value&utm_medium=value&utm_campaign=value&utm_term=value&utm_content=value&ad_id=value&adset_id=value&campaign_id=value&ad_name=value&adset_name=value&campaign_name=value&placement=value&site_source_name=value"
    
    getCurrentURL({
      hasSearch: false
    })
    // "https://google.com/tw/"

    getCurrentURL({
      trimTracking: true
    })
    // https://google.com/tw/?a=%E5%80%BC
  `,
  isBrowserOnly: true,
  kind: "URL"
};
