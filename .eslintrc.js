module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: ["plugin:react/recommended", "airbnb", "plugin:i18next/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react", "@typescript-eslint", "i18next"],

  rules: {
    "comma-dangle": ["error", "never"],
    quotes: ["error", "double"],
    "@typescript-eslint/quotes": ["error", "double"],

    "react/jsx-filename-extension": [2, { extensions: [".js", ".jsx", ".ts", ".tsx"] }],
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "no-unused-vars": [("warn", { argsIgnorePattern: "^_" })],
    "react/require-default-props": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "warn",
    "react/function-component-definition": "off",
    "no-shadow": "off",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "no-underscore-dangle": "off",
    "linebreak-style": 0,
    "react/no-unused-prop-types": 0,
    "object-curly-newline": 0,
    "i18next/no-literal-string": ["error", { markupOnly: true }],
    "max-len": [
      "error",
      {
        ignoreComments: true
      }
    ]
  },
  globals: {
    __IS_DEV__: true
  }
};
