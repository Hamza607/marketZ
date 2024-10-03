// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettir from "eslint-config-prettier";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

const config = tseslint.config(
  eslint?.configs?.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettir,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      parserOptions: {
        sourceType: "module",
        project: true,
      },
    },
  },
  {
    ignores: ["**/*.config.js", "**/components/ui/**", "**/lib/utils.ts"],
  },
  {
    rules: {
      quotes: ["error", "double"],
    },
  },
);

export default config;
