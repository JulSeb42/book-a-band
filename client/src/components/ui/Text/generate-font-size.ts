/*=============================================== Generate font size ===============================================*/

import { FONT_SIZES } from "components"
import type { FontSizesTypes } from "components/types"

export const generateFontSize = (fontSize: FontSizesTypes | "inherit") => {
    switch (fontSize) {
        case "h1":
            return FONT_SIZES.H1
        case "h2":
            return FONT_SIZES.H2
        case "h3":
            return FONT_SIZES.H3
        case "h4":
            return FONT_SIZES.H4
        case "h5":
            return FONT_SIZES.H5
        case "h6":
            return FONT_SIZES.H6
        case "small":
            return FONT_SIZES.SMALL
        case "inherit":
            return null
        default:
            return FONT_SIZES.BODY
    }
}
