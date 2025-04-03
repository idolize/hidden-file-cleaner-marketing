import { FlatCompat } from '@eslint/eslintrc';
import reactCompiler from 'eslint-plugin-react-compiler'

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript', 'prettier', 'plugin:next-on-pages/recommended'],
  }),
  reactCompiler.configs.recommended,
];

export default eslintConfig;
