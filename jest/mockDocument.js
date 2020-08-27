const defaultProps = {
  attribute: "",
  value: ""
};

const mockDocument = props => {
  if (!window || !document) {
    throw new Error("No window or document founded.");
  }

  const { attribute, value } = { ...defaultProps, ...props };

  Object.defineProperty(window.document, attribute, {
    value,
    configurable: true
  });
};

export default mockDocument;
