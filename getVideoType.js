// local files
const checkIsString = require("./checkIsString");

const getVideoType = src => {
  if (!checkIsString(src)) {
    throw new Error("getVideoType: src is not string");
  }

  let prefix = "video";
  let type = "";

  if (src.match(/\.mp4$/gi)) type = "mp4";
  if (src.match(/\.ogg$/gi)) type = "ogg";
  if (src.match(/\.webm$/gi)) type = "webm";

  return type ? `${prefix}/${type}` : "";
};

module.exports = getVideoType;
