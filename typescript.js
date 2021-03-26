module.exports = {
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "plugin:jsdoc/recommended"
  ],
  "rules": {
    "@typescript-eslint/consistent-type-definitions": "error",
    "@typescript-eslint/explicit-module-boundary-types": "error",
    "brace-style": [
      "error",
      "1tbs"
    ],
    "no-shadow": "off",
    "jsdoc/require-returns-type": "off",
    "jsdoc/require-param-type": "off",
    "jsdoc/require-property-type": "off",
    "jsdoc/require-returns": "off"
  }
}
