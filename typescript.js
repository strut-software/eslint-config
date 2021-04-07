module.exports = {
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "plugin:jsdoc/recommended"
  ],
  "plugins": [
    "jsdoc"
  ],
  "rules": {
    "@typescript-eslint/consistent-type-definitions": "error",
    "@typescript-eslint/explicit-module-boundary-types": "error",
    "jsdoc/check-alignment": "error",
    "jsdoc/check-examples": "error",
    "jsdoc/check-indentation": "error",
    "jsdoc/check-param-names": "error",
    "jsdoc/check-property-names": "error",
    "jsdoc/check-syntax": "error",
    "jsdoc/check-tag-names": "error",
    "jsdoc/check-types": "error",
    "jsdoc/check-values": "error",
    "jsdoc/empty-tags": "error",
    "jsdoc/implements-on-classes": "error",
    "jsdoc/match-description": "error",
    "jsdoc/newline-after-description": "error",
    "jsdoc/no-bad-blocks": "warn",
    "jsdoc/no-types": "error",
    "jsdoc/require-description": "error",
    "jsdoc/require-description-complete-sentence": "error",
    "jsdoc/require-jsdoc": ["error", {
      publicOnly: false,
      require: {
        ClassDeclaration: true,
        FunctionDeclaration: true,
        MethodDefinition: true,
      },
      contexts: [
        {
          context: "ClassProperty",
          inlineCommentBlock: true
        },
        {
          context: "TSPropertySignature",
          inlineCommentBlock: true
        },
      ],
      exemptEmptyFunctions: false,
      checkConstructors: false
    }],
    "jsdoc/require-param": "error",
    "jsdoc/require-param-description": "error",
    "jsdoc/require-param-name": "error",
    "jsdoc/require-param-type": "off",
    "jsdoc/require-property": "error",
    "jsdoc/require-property-description": "error",
    "jsdoc/require-property-name": "error",
    "jsdoc/require-property-type": "off",
    "jsdoc/require-returns": "error",
    "jsdoc/require-returns-check": "error",
    "jsdoc/require-returns-description": "error",
    "jsdoc/require-returns-type": "off",
    "jsdoc/require-yields-check": "error",
    "brace-style": [
      "error",
      "1tbs"
    ],
    "no-shadow": "off",
  }
}
