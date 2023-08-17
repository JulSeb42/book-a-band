/*=============================================== Exports ===============================================*/

const { generateComponent } = require("./component")
const { generateSingleFileComponent } = require("./single-component")
const { generatePage } = require("./page")
const { generateRoute } = require("./route")

module.exports = {
    generateComponent,
    generateSingleFileComponent,
    generatePage,
    generateRoute,
}
