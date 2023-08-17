/*=============================================== Plopfile ===============================================*/

const { capitalize } = require("ts-utils-julseb")

const {
    generateComponent,
    generateSingleFileComponent,
    generatePage,
    generateRoute,
    generateModel,
} = require("./generators")

// Generate components, pages, routes and models

module.exports = (/** @type {import('plop').NodePlopAPI} */ plop) => {
    const { setHelper } = plop

    setHelper("capitalize", text => capitalize(text))

    generateComponent(plop) // yarn plop:c
    generateSingleFileComponent(plop) // yarn plop:sc
    generatePage(plop) // yarn plop:p
    generateRoute(plop) // yarn plop:r
    generateModel(plop) // yarn plop:m
}
