/*=============================================== Plopfile ===============================================*/

const { capitalize, convertToPascal } = require("ts-utils-julseb")

// Generate components, pages, routes and models

module.exports = (
    /** @type {import('plop').NodePlopAPI} */
    plop
) => {
    const { setGenerator, setHelper } = plop

    setHelper("capitalize", text => capitalize(text))
    setHelper("pascal", text => convertToPascal(text))
    setHelper("lowercase", text => text.toLowerCase())

    setGenerator("component", {
        description: "React component",
        prompts: [
            {
                type: "input",
                name: "name",
                message: "Enter the component's name",
            },
            {
                type: "input",
                name: "tag",
                message: "Which HTML tag?",
                default: "div",
            },
            {
                type: "confirm",
                name: "forward",
                message: "Add `forwardRef`?",
                default: false,
            },
            {
                type: "confirm",
                name: "as",
                message: "Add `as` prop?",
                default: false,
            },
        ],
        actions: [
            {
                type: "add",
                path: "../client/src/components/{{ pascal name }}/index.ts",
                templateFile: "./templates/component/component-index.hbs",
            },
            {
                type: "add",
                path: "../client/src/components/{{ pascal name }}/{{ pascal name }}.tsx",
                templateFile: "./templates/component/component-file.hbs",
            },
            {
                type: "add",
                path: "../client/src/components/{{ pascal name }}/styles.tsx",
                templateFile: "./templates/component/component-styles.hbs",
            },
            {
                type: "add",
                path: "../client/src/components/{{ pascal name }}/types.ts",
                templateFile: "./templates/component/component-types.hbs",
            },
            {
                type: "append",
                path: "../client/src/components/index.ts",
                template: 'export * from "components/{{ pascal name }}"',
            },
        ],
    })

    setGenerator("page", {
        description: "Generate page",
        prompts: [
            {
                type: "input",
                name: "name",
                message: "Enter page's name",
            },
        ],
        actions: [],
    })

    setGenerator("route", {
        description: "Generate route",
        prompts: [
            {
                type: "input",
                name: "name",
                message: "Enter route's name",
            },
        ],
        actions: [],
    })

    setGenerator("model", {
        description: "Generate model",
        prompts: [
            {
                type: "input",
                name: "name",
                message: "Enter model's name",
            },
        ],
        actions: [],
    })
}
