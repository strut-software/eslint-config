module.exports = {
  "extends": [
    "plugin:rxjs/recommended"
  ],
  "rules": {
    "rxjs/finnish": [
      "error",
      {
        "functions": false,
        "methods": false,
        "parameters": false,
      }
    ],
    "rxjs/no-compat": "error",
    "rxjs/no-ignored-error": "error",
    "rxjs/no-implicit-any-catch": "off",
    "rxjs/no-subject-value": "off"
  }
}
