/*=============================================== Text styles ===============================================*/

import styled, { css } from "styled-components"
import {
    FONT_FAMILY,
    LINE_HEIGHT,
    FONT_WEIGHTS,
    COLORS,
    TRANSITIONS,
    Mixins,
} from "components"
import { generateFontSize } from "components/ui/Text/generate-font-size"
import type { FontSizesTypes } from "components/types"

const baseTextStyles = ({
    fontSize,
}: {
    fontSize: FontSizesTypes | "inherit"
}) => css`
    font-family: ${FONT_FAMILY};
    line-height: ${LINE_HEIGHT};
    font-size: ${generateFontSize(fontSize)};
    color: currentColor;

    ${Mixins.ColorAttribute};

    a,
    button {
        text-decoration: none;
        border: none;
        padding: 0;
        color: ${COLORS.PRIMARY_500};
        transition: ${TRANSITIONS.SHORT};
        font-weight: ${FONT_WEIGHTS.BLACK};
        font-size: ${generateFontSize(fontSize)};
        background-color: transparent;

        &:hover {
            color: ${COLORS.PRIMARY_300};
        }
    }
`

export const StyledH1 = styled.h1`
    font-weight: ${FONT_WEIGHTS.BLACK};
    ${baseTextStyles({ fontSize: "h1" })}
`

export const StyledH2 = styled.h2`
    font-weight: ${FONT_WEIGHTS.BLACK};
    ${baseTextStyles({ fontSize: "h2" })}
`

export const StyledH3 = styled.h3`
    font-weight: ${FONT_WEIGHTS.BLACK};
    ${baseTextStyles({ fontSize: "h3" })}
`

export const StyledH4 = styled.h4`
    font-weight: ${FONT_WEIGHTS.BLACK};
    ${baseTextStyles({ fontSize: "h4" })}
`

export const StyledH5 = styled.h5`
    font-weight: ${FONT_WEIGHTS.BLACK};
    ${baseTextStyles({ fontSize: "h5" })}
`

export const StyledH6 = styled.h6`
    font-weight: ${FONT_WEIGHTS.BLACK};
    ${baseTextStyles({ fontSize: "h6" })}
`

export const StyledP = styled.p`
    ${baseTextStyles({ fontSize: "body" })}
`

export const StyledStrong = styled.strong`
    font-weight: ${FONT_WEIGHTS.BLACK};
    ${baseTextStyles({ fontSize: "inherit" })}
`

export const StyledEm = styled.em`
    font-style: italic;
    ${baseTextStyles({ fontSize: "inherit" })}
`

export const StyledSmall = styled.small`
    ${baseTextStyles({ fontSize: "small" })}
`

export const StyledUl = styled.ul`
    ${baseTextStyles({ fontSize: "body" })}
`
