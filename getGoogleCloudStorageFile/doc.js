module.exports = {
  title: "getGoogleCloudStorageFile",
  description: "Get a file URL that can be linked from Google Cloud Storage.",
  arguments: `
    filePath = ""; // required, the format is "project/filename"
  `,
  usage: `
    getGoogleCloudStorageFile("storybook.letea.me/issue-img-webp.jpg");
    // https://storage.cloud.google.com/storybook.letea.me/issue-img-webp.jpg
  `,
  kind: "URL"
};
