const defaultProps = {
  url: "",
  message: ""
};

const getShareToLineLink = (props = defaultProps) => {
  const { url, message } = Object.assign({}, defaultProps, props);
  return `http://line.naver.jp/R/msg/text/?${encodeURI(message)}%0D%0A${url ||
    location.href}`;
};

export default getShareToLineLink;
