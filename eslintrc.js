module.exports = {
    env: {
        browser: true, 
        es2021: true,
        node: true,
        jest: true,
    },
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        exmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {},
    settings: {
        react: {
            version: 'detect'
        },
    },
};