module.exports = {
  title: "getVideoType",
  description: "Get video type for video & source tag.",
  arguments: `
    src = ""; // required
  `,
  usage: `
    getVideoType("https://example.com/file/video.mp4");
    // "video/mp4"
  `,
  kind: "Video"
};
