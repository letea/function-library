module.exports = {
  title: "getParametersFromURL",
  description: "Transform URL's search into an object.",
  arguments: `
    url = ""; // required
  `,
  usage: `
    getParametersFromURL("http://example.com/?a=1");
    // { a: 1 }

    getParametersFromURL("http://example.com/?a=1&b=2&c=3");
    // { a: 1, b: 2, c: 3 }

    getParametersFromURL("?a=1");
    // { a: 1 }

    getParametersFromURL("?a=1&b=2&c=3");
    // { a: 1, b: 2, c: 3 }

    getParametersFromURL("?a=%E5%80%BC");
    // { a: "值" }

    getParametersFromURL("http://example.com/");
    // {}
  `,
  kind: "URL"
};
