module.exports = {
  title: "getShareToFacebookLink",
  description: "Get a link that can direct to the Facebook Share Page.",
  arguments: `
    url = ""; // optional, if empty, it's will using location.href.
  `,
  usage: `
    getShareToFacebookLink();
    // "https://www.facebook.com/sharer/sharer.php?u={location.href}"

    getShareToFacebookLink("https://google.com");
    // "https://www.facebook.com/sharer/sharer.php?u=https://google.com"
  `,
  references: [
    { title: "Facebook", url: "https://www.facebook.com/sharer/sharer.php" }
  ],
  isBrowserOnly: true,
  kind: "URL"
};
