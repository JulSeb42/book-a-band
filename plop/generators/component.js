/*=============================================== Generate component ===============================================*/

const generateComponent = (/** @type {import('plop').NodePlopAPI} */ plop) => {
    const { setGenerator } = plop

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
                destination: "../client/src/components/{{ pascalCase name }}",
                templateFiles: "./templates/component/*.hbs",
                base: "./templates/component",
            },
            {
                type: "modify",
                path: "../client/src/components/index.ts",
                template:
                    'export * from "components/{{ pascalCase name }}"\n$1',
                pattern: /(\/\/ prependHere)/g,
            },
        ],
    })
}

module.exports = { generateComponent }
