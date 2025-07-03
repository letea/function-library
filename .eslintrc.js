export default {
  env: {
    browser: true,
    es2020: true,
    node: true,
    jest: true
  },
  extends: ["eslint:recommended", "plugin:jest/recommended"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module"
  },
  rules: {}
};
