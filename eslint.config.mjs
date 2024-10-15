import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  pluginJs.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
        globals: globals.browser
    },
    env: {
      node: true,
      es6: true  
    },
    rules: {
      'no-unused-vars': 'error',
      'no-console': 'warn',
      'semi': ['error', 'always'],
      'quotes': ['error', 'double'],
    },
  },
];
