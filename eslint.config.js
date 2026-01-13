
import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import globals from 'globals';

export default [
    {
        ignores: ['dist', 'node_modules', 'public'],
    },
    js.configs.recommended,
    ...pluginVue.configs['flat/recommended'],
    {
        files: ['**/*.{js,mjs,cjs,vue}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        rules: {
            "indent": ["error", 4],
            "vue/html-indent": ["error", 4],
        },
    },
];
