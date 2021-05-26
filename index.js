const Rules = require('@thecodejs/eslint-rules/rules-react-ts')

module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:import/react',
        'plugin:import/recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    globals: {
        Audio: true,
        Element: true,
        Event: true,
        localStorage: true
    },
    overrides: [
        {
            extends: ['plugin:jest-dom/recommended', 'plugin:testing-library/react'],
            files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
            rules: {
                'jest-dom/prefer-checked': 'error',
                'jest-dom/prefer-enabled-disabled': 'error',
                'jest-dom/prefer-required': 'error',
                'jest-dom/prefer-to-have-attribute': 'error',
                'testing-library/await-async-query': 'error',
                'testing-library/no-await-sync-query': 'error',
                'testing-library/no-debug': 'warn',
                'testing-library/no-dom-import': 'off',
                'testing-library/no-node-access': 'off'
            }
        }
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: ['babel', 'jsx-a11y', 'jest-dom', 'testing-library', 'react', '@typescript-eslint'],
    rules: {
        ...Rules
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx']
            },
            typescript: {
                alwaysTryTypes: true
            }
        },
        react: {
            version: 'detect'
        }
    }
}
