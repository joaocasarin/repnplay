module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'import', 'prettier'],
    extends: [
        'next/core-web-vitals',
        'airbnb',
        'prettier',
        'plugin:react/jsx-runtime'
    ],
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx', '.js', '.jsx', '.json']
        },
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true,
                project: './tsconfig.json'
            }
        }
    },
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module'
    },
    globals: {
        NodeJS: true
    },
    ignorePatterns: ['!.prettierrc.js', '!.eslintrc.js'],
    rules: {
        'import/extensions': ['error', 'never', { json: 'always' }],
        'import/prefer-default-export': 'off',
        'import/first': 'off',
        'import/no-mutable-exports': 'off',
        'linebreak-style': ['error', 'unix'],
        '@typescript-eslint/indent': [
            'error',
            4,
            { SwitchCase: 1, ignoredNodes: ['PropertyDefinition'] }
        ],
        'comma-dangle': ['error', 'never'],
        'class-methods-use-this': 'off',
        semi: ['error', 'always'],
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: [
                    '__tests__/**',
                    'jest.config.ts',
                    'jest.config.js',
                    '.eslintrc.js',
                    '.prettierrc.js'
                ]
            }
        ],
        'no-plusplus': 'off',
        'no-restricted-syntax': 'off',
        'no-param-reassign': 'off',
        'no-use-before-define': 'off',
        'prefer-exponentiation-operator': 'off',
        'no-restricted-properties': 'off',
        'prefer-destructuring': 'off',
        'react/jsx-filename-extension': 'off',
        'react/function-component-definition': 'off'
    }
};
