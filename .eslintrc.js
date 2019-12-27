module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'jest'
  ],
  parserOptions: {
    ecmaVersion: 2018,  // Allows for the parsing of modern ECMAScript features
    sourceType: 'module',  // Allows for the use of imports
  },
  extends: [
    'airbnb-typescript',
    'prettier/@typescript-eslint',
    'plugin:jest/recommended'
  ],
  rules: {
    "react/no-unescaped-entities": 0
  }
};
