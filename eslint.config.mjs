import globals from "globals";
import pluginJs from "@eslint/js";

export default [
    pluginJs.configs.recommended,
    {
        files: ['**/*.js'],
        ignores: [
            'node_modules/',
            'dist/',
            'lib/',
            'test/', // Ignore all test files
        ],
        languageOptions: {
            ecmaVersion: 2020,
            sourceType: 'module',
            globals: {
                ...globals.node,   // Add Node.js globals
                ...globals.es6,    // Add ES6 globals
                ...globals.browser // Add browser globals like `document`, `window`
            }
        },
        rules: {
            'no-unused-vars': 'error',
            'no-console': 'warn',
            'semi': ['error', 'always'],
            'quotes': ['error', 'double'],
            'no-undef': 'error', // This will now respect your environment globals
        },
    },
];
