// @ts-check
import eslint from "@eslint/js";
import honoConfig from "@hono/eslint-config";
import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";
import nextPlugin from "@next/eslint-plugin-next";
import prettierConfig from "eslint-config-prettier";

const webFiles = ["apps/web/**/*.{js,jsx,ts,tsx}"];
const serverFiles = ["apps/server/**/*.{js,cjs,mjs,ts,tsx}"];

const serverHonoConfig = defineConfig({
  files: serverFiles,
  extends: [honoConfig],
});

export default defineConfig(
  {
    ignores: [
      "**/node_modules/**",
      "**/.next/**",
      "**/dist/**",
      "**/build/**",
      "**/coverage/**",
      "**/.turbo/**",
      "**/.wrangler/**",
      "**/.agents/**",
      "**/.claude/**",
      "apps/mobile/.expo/**",
      "apps/mobile/web-build/**",
      "apps/mobile/android/**",
      "apps/mobile/ios/**",
      "apps/desktop/.vite/**",
      "apps/desktop/out/**",
    ],
  },

  eslint.configs.recommended,

  ...tseslint.configs.recommended,

  {
    files: webFiles,
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },

  {
    files: serverFiles,
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
      globals: {
        ...globals.node,
      },
    },
  },


  {
    files: webFiles,
    plugins: {
      "@next/next": nextPlugin,
    },
    settings: {
      next: {
        rootDir: "apps/web/",
      },
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
    },
  },

  ...serverHonoConfig,

  {
    files: serverFiles,
    rules: {
      // Hono's context helpers can surface "error" types in typed linting.
      "@typescript-eslint/no-unsafe-return": "off",
    },
  },

  prettierConfig,
);
