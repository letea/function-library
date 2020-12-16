module.exports = {
  title: "getSearchFromParameters",
  description: "Transform an object into a search for a URL.",
  arguments: `
    parameters = {}; // required
  `,
  usage: `
    getSearchFromParameters({ a: 1 });
    // "?a=1"

    getSearchFromParameters({ a: 1, b: 2, c: 3 });
    // "?a=1&b=2&c=3"

    getSearchFromParameters({ a: 1 });
    // "?a=1"

    getSearchFromParameters({ a: 1, b: 2, c: 3 });
    // "?a=1&b=2&c=3"

    getSearchFromParameters({ a: "值" });
    // "?a=%E5%80%BC"

    getSearchFromParameters({});
    // ""
  `,
  kind: "URL"
};
