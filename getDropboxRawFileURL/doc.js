module.exports = {
  title: "getDropboxRawFileURL",
  description: "Get a file URL that can be linked from Dropbox directly.",
  arguments: `
    filePath = ""; // required, the format is "id/filename"
  `,
  usage: `
    getDropboxRawFileURL("0xp0v2cm3asbk0h/sample.jpg");
    // https://www.dropbox.com/s/0xp0v2cm3asbk0h/sample.jpg?raw=1
  `,
  references: [
    {
      title: "How to Force a Shared Link to Download or Render - Dropbox",
      url: "https://help.dropbox.com/files-folders/share/force-download"
    }
  ],
  kind: "URL"
};
