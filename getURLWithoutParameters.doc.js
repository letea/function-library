module.exports = {
  title: "getURLWithoutParameters",
  description: "Trim URL's search.",
  arguments: `
    url = ""; // required
  `,
  usage: `
    getURLWithoutParameters("http://example.com/?a=1");
    // http://example.com/
    
    getURLWithoutParameters("http://example.com/?a=1&b=2&c=3");
    // http://example.com/
    
    getURLWithoutParameters("http://example.com/?a=%E5%80%BC");
    // http://example.com/
    
    getURLWithoutParameters("http://example.com/");
    // http://example.com/
  `,
  kind: "URL"
};
