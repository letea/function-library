module.exports = {
  title: "checkIsAbsoluteURL",
  description: "Check the URL is absolute or not.",
  arguments: `
    url = ""; // required
  `,
  usage: `
    checkIsAbsoluteURL("https://google.com"); 
    // true
    
    checkIsAbsoluteURL("ftp://www.myserver.net"); 
    // true
    
    checkIsAbsoluteURL("/foo/bar"); 
    // false
  `,
  references: [
    {
      title: "isAbsoluteURL - 30 seconds of code",
      url: "https://www.30secondsofcode.org/js/s/is-absolute-url/"
    }
  ],
  kind: "URL"
};
