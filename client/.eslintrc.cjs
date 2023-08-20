/* eslint-env node */
module.exports = {
    root: true,
    extends: ["plugin:react-hooks/recommended", "plugin:react/recommended"],
    parser: "@typescript-eslint/parser",
    plugins: [
        "@typescript-eslint",
        "eslint-plugin-import",
        "eslint-plugin-react-hooks",
        "react-hooks",
    ],
    rules: {
        "import/no-duplicates": "warn",
        "@typescript-eslint/consistent-type-imports": "warn",
        "@typescript-eslint/no-unused-expressions": "warn",
        "@typescript-eslint/no-unused-vars": [
            "warn",
            {
                vars: "all",
                args: "after-used",
                ignoreRestSiblings: true,
                destructuredArrayIgnorePattern: "[_]",
            },
        ],
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
        "react-hooks/rules-of-hooks": "warn",
        "react/react-in-jsx-scope": "off",
        "react/function-component-definition": [
            "warn",
            {
                namedComponents: "function-declaration",
                // | "function-expression" | "arrow-function" | Array < "function-declaration" | "function-expression" | "arrow-function"
            },
        ],
        "react/display-name": "off",
        "react/no-unescaped-entities": "off",
        "import/no-default-export": "warn",

        // "import/no-duplicates": "error",
        // "@typescript-eslint/consistent-type-imports": "error",
        // "@typescript-eslint/no-unused-expressions": "error",
        // "@typescript-eslint/no-unused-vars": [
        //     "error",
        //     // {
        //     //     vars: "all",
        //     //     args: "after-used",
        //     //     ignoreRestSiblings: true,
        //     //     destructuredArrayIgnorePattern: "[A-Z, _]",
        //     // },
        // ],
        // "@typescript-eslint/no-explicit-any": "error",
        // "@typescript-eslint/ban-ts-comment": "error",
        // "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
        // "react-hooks/rules-of-hooks": "error",
    },
}
