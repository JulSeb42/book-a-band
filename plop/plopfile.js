/*=============================================== Plopfile ===============================================*/

const { capitalize, convertToPascal } = require("ts-utils-julseb")
const { generatePageRoute } = require("./utils/generate-page-route")

// Generate components, pages, routes and models

module.exports = (
    /** @type {import('plop').NodePlopAPI} */
    plop
) => {
    const { setGenerator, setHelper } = plop

    setHelper("capitalize", text => capitalize(text))
    setHelper("pascal", text => convertToPascal(text))
    setHelper("routePath", text =>
        text
            .replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`)
            .replaceAll("-", "_")
            .replaceAll(" ", "_")
            .toUpperCase()
    )

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
                type: "modify",
                path: "../client/src/components/index.ts",
                template: 'export * from "components/{{ pascal name }}"\n$1',
                pattern: /(\/\/ prependHere)/g,
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
                type: "modify",
                path: "../client/src/components/index.ts",
                template: 'export * from "components/{{ pascal name }}"\n$1',
                pattern: /(\/\/ prependHere)/g,
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
            {
                type: "input",
                name: "title",
                message: "Enter page title",
            },
            {
                type: "input",
                name: "path",
                message: "Enter path",
            },
            {
                type: "confirm",
                name: "multi",
                message: "Is this a multi file page?",
                default: false,
            },
            {
                type: "list",
                name: "protected",
                choices: ["none", "protected", "anon"],
                default: "none",
            },
        ],

        actions: data => {
            const actions = [
                {
                    type: "modify",
                    path: "../client/src/routes/routes.tsx",
                    template:
                        'import { {{ pascal name }} } from "pages/{{ pascal name }}"\n$1',
                    pattern: /(\/\/ prependImport)/g,
                },
                {
                    type: "modify",
                    path: "../client/src/routes/routes.tsx",
                    template: generatePageRoute(data.protected),
                    pattern: /(\/\/ prependRoute)/g,
                },
                {
                    type: "modify",
                    path: "../client/src/data/paths.ts",
                    template: '{{ routePath name }}: "/{{ path }}"\n$1',
                    pattern: /(\/\/ prependPath)/g,
                },
                {
                    type: "add",
                    path: data.multi
                        ? "../client/src/pages/{{ pascal name }}/{{ pascal name }}.tsx"
                        : "../client/src/pages/{{ pascal name }}.tsx",
                    templateFile: "./templates/page/page-file.hbs",
                },
            ]

            if (data.multi) {
                actions.push({
                    type: "add",
                    path: "../client/src/pages/{{ pascal name }}/index.ts",
                    templateFile: "./templates/page/page-index.hbs",
                })
            }

            return actions
        },
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
