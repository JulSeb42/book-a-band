/*=============================================== Plopfile ===============================================*/

const { capitalize, convertToPascal } = require("ts-utils-julseb")

// Generate components, pages, routes and models

const validateInput = input => {
    if (input && input !== "") {
        return /^[a-zA-Z.-]+$/.test(input)
    }
    return false
}

module.exports = (
    /** @type {import('plop').NodePlopAPI} */
    plop
) => {
    const { setGenerator, setHelper } = plop

    setHelper("capitalize", text => capitalize(text))
    setHelper("pascal", text => convertToPascal(text))

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
                type: "addMany",
                destination: "../client/src/components/{{ pascal name }}",
                templateFiles: "./templates/component/*.hbs",
                base: "./templates/component",
            },
            {
                type: "append",
                path: "../client/src/components/index.ts",
                template: 'export * from "components/{{ pascal name }}"',
                pattern: /(\/\/ appendHere)/g,
            },
        ],
    })

    setGenerator("single-component", {
        description: "Generate single file React component",
        prompts: [
            {
                type: "input",
                name: "name",
                message: "Enter the component's name",
            },
            {
                type: "confirm",
                name: "props",
                message: "Add props?",
                default: false,
            },
            {
                type: "input",
                name: "tag",
                message: "Which HTML tag?",
            },
            {
                type: "input",
                name: "components",
                message: "Import other components?",
            },
        ],
        actions: [
            {
                type: "add",
                path: "../client/src/components/{{ pascal name }}.tsx",
                templateFile: "./templates/single-component.hbs",
            },
            {
                type: "append",
                path: "../client/src/components/index.ts",
                template: 'export * from "components/{{ pascal name }}"',
                pattern: /(\/\/ appendHere)/g,
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
