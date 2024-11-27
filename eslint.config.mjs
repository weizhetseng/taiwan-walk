// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";
import eslintConfigPrettier from "eslint-config-prettier";

export default withNuxt(
  {
    rules: {
      "no-console": "warn",
      "no-else-return": ["error", { allowElseIf: false }],
    },
  },
  eslintConfigPrettier,
);
