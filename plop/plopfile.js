/*=============================================== Plopfile ===============================================*/

const { capitalize } = require("ts-utils-julseb")

const {
    generateComponent,
    generateSingleFileComponent,
    generatePage,
    generateRoute,
} = require("./generators")

// Generate components, pages, routes and models

module.exports = (/** @type {import('plop').NodePlopAPI} */ plop) => {
    const { setGenerator, setHelper } = plop

    setHelper("capitalize", text => capitalize(text))

    generateComponent(plop) // yarn plop:c
    generateSingleFileComponent(plop) // yarn plop:sc
    generatePage(plop) // yarn plop:p
    generateRoute(plop) // yarn plop:r

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
