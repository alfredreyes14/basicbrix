module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier/@typescript-eslint"
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "quotes": ['error', "single"],
    "no-unused-vars": "error",
    "eol-last": ["error", "always"],
    "array-bracket-spacing": ["error", "always", { "singleValue": false }],
    "no-trailing-spaces": ["error", { "ignoreComments": true }],
    "no-whitespace-before-property": "error",
    "object-curly-spacing": ["error", "always", { "objectsInObjects": false, "arraysInObjects": false }],
    "semi": ["error", "never"]
  }
};
