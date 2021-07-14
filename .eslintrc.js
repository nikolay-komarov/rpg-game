module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    "object-curly-newline": "warn",
    "no-unused-vars": "warn",
    "no-unused-expressions": "warn",
    "max-len": "warn",
    "camelcase": "warn",
    "import/prefer-default-export": "warn",
    "prefer-destructuring": "warn",
    "no-plusplus": "warn",
  },
};
