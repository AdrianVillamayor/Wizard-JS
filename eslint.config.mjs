import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  pluginJs.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        ...globals.node,   // Add Node.js globals
        ...globals.es6     // Add ES6 globals
      }
    },
    rules: {
      'no-unused-vars': 'error',
      'no-console': 'warn',
      'semi': ['error', 'always'],
      'quotes': ['error', 'double'],
    },
  },
];
