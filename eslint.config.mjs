import { FlatCompat } from '@eslint/eslintrc';
import reactCompiler from 'eslint-plugin-react-compiler';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: [
      'next/core-web-vitals',
      'next/typescript',
      'prettier',
      'plugin:next-on-pages/recommended',
    ],
  }),
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
      'unused-imports': unusedImports,
    },
  },
  reactCompiler.configs.recommended,
  {
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^(_|err)',
        },
      ],
      '@typescript-eslint/no-unused-expressions': [
        'error',
        {
          allowTaggedTemplates: true,
          allowShortCircuit: true,
          allowTernary: true,
        },
      ],
    },
  }
];

export default eslintConfig;
