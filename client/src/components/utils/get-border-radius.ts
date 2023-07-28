/*=============================================== Get border radius ===============================================*/

import { stringifyPx } from "ts-utils-julseb"

import { RADIUSES } from "components"
import type { RadiusesType } from "components/types"

export const getBorderRadius = (radius?: RadiusesType | null) => {
    if (typeof radius === "number") return stringifyPx(radius)

    switch (radius) {
        case "xxl":
            return RADIUSES.XXL
        case "xl":
            return RADIUSES.XL
        case "l":
            return RADIUSES.L
        case "m":
            return RADIUSES.M
        case "s":
            return RADIUSES.S
        case "xs":
            return RADIUSES.XS
        case "round":
            return RADIUSES.ROUND
        case "circle":
            return RADIUSES.CIRCLE
        default:
            return null
    }
}
