/* eslint-env node */
module.exports = {
    root: true,
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "eslint-plugin-import"],
    rules: {
        "import/no-duplicates": "warn",
        "@typescript-eslint/consistent-type-imports": "warn",
        "@typescript-eslint/no-unused-expressions": "warn",
    },
}
