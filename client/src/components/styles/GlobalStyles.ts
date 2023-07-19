/*=============================================== Global styles ===============================================*/

import { createGlobalStyle } from "styled-components"

import {
    FONT_FAMILY,
    COLORS,
    LINE_HEIGHT,
    FONT_WEIGHTS,
    FONT_SIZES,
} from "components"

export const GlobalStyle = createGlobalStyle`
    * {
        font-family: ${FONT_FAMILY};
    }

    html,
    body {
        background-color: ${COLORS.WHITE};
        color: ${COLORS.BLACK};
        line-height: ${LINE_HEIGHT};
        position: relative;
        font-weight: ${FONT_WEIGHTS.REGULAR};
        font-size: ${FONT_SIZES.BODY};
    }
`
