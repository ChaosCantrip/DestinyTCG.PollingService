import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  tseslint.configs.recommended,
  {
    ignores: [
      "dist/",
      "node_modules/",
    ]
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: {
      js
    },
    extends: ["js/recommended"],
    languageOptions: {
      globals: globals.node
    },
    rules: {
      "brace-style": ["warn", "allman"],
      "quotes": ["warn", "double"],
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      "indent": ["warn", 4]
    }
  },
  {
    files: ["**/*.{mjs,mts}"],
    rules: {
      "indent": ["warn", 2]
    }
  }
]);
