/*=============================================== Get spacer ===============================================*/

import { stringifyPx } from "ts-utils-julseb"
import { SPACERS } from "components"
import type { SpacersTypes } from "../types"

export const variableSpacer = (spacer: SpacersTypes | "none" | null) => {
    if (typeof spacer === "number") return stringifyPx(spacer)

    switch (spacer) {
        case "xxl":
            return SPACERS.XXL
        case "xl":
            return SPACERS.XL
        case "l":
            return SPACERS.L
        case "m":
            return SPACERS.M
        case "s":
            return SPACERS.S
        case "xs":
            return SPACERS.XS
        case "xxs":
            return SPACERS.XXS
        case "none":
            return "0"
        default:
            return null
    }
}
