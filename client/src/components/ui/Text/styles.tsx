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
import type { FontSizesTypes, ColorsTypes } from "components/types"

const baseTextStyles = ({
    fontSize,
    color,
}: {
    fontSize: FontSizesTypes | "inherit"
    color?: ColorsTypes
}) => css`
    font-family: ${FONT_FAMILY};
    line-height: ${LINE_HEIGHT};
    font-size: ${Mixins.FontSize(fontSize)};
    color: currentColor;
    color: ${Mixins.Color({ color })};

    a,
    button {
        text-decoration: none;
        border: none;
        padding: 0;
        color: ${COLORS.PRIMARY};
        transition: ${TRANSITIONS.SHORT};
        font-weight: ${FONT_WEIGHTS.BLACK};
        font-size: ${generateFontSize(fontSize)};
        background-color: transparent;

        &:hover {
            color: ${COLORS.PRIMARY_HOVER};
        }

        &:active {
            color: ${COLORS.PRIMARY_ACTIVE};
        }
    }
`

export const StyledH1 = styled.h1<{ $color?: ColorsTypes }>`
    font-weight: ${FONT_WEIGHTS.BLACK};
    ${({ $color }) => baseTextStyles({ fontSize: "h1", color: $color })}
`

export const StyledH2 = styled.h2<{ $color?: ColorsTypes }>`
    font-weight: ${FONT_WEIGHTS.BLACK};
    ${({ $color }) => baseTextStyles({ fontSize: "h2", color: $color })}
`

export const StyledH3 = styled.h3<{ $color?: ColorsTypes }>`
    font-weight: ${FONT_WEIGHTS.BLACK};
    ${({ $color }) => baseTextStyles({ fontSize: "h3", color: $color })}
`

export const StyledH4 = styled.h4<{ $color?: ColorsTypes }>`
    font-weight: ${FONT_WEIGHTS.BLACK};
    ${({ $color }) => baseTextStyles({ fontSize: "h4", color: $color })}
`

export const StyledH5 = styled.h5<{ $color?: ColorsTypes }>`
    font-weight: ${FONT_WEIGHTS.BLACK};
    ${({ $color }) => baseTextStyles({ fontSize: "h5", color: $color })}
`

export const StyledH6 = styled.h6<{ $color?: ColorsTypes }>`
    font-weight: ${FONT_WEIGHTS.BLACK};
    ${({ $color }) => baseTextStyles({ fontSize: "h6", color: $color })}
`

export const StyledP = styled.p<{ $color?: ColorsTypes }>`
    ${({ $color }) => baseTextStyles({ fontSize: "body", color: $color })}
`

export const StyledStrong = styled.strong<{ $color?: ColorsTypes }>`
    font-weight: ${FONT_WEIGHTS.BLACK};
    ${({ $color }) => baseTextStyles({ fontSize: "inherit", color: $color })}
`

export const StyledEm = styled.em<{ $color?: ColorsTypes }>`
    font-style: italic;
    ${({ $color }) => baseTextStyles({ fontSize: "inherit", color: $color })}
`

export const StyledSmall = styled.small<{ $color?: ColorsTypes }>`
    ${({ $color }) => baseTextStyles({ fontSize: "small", color: $color })}
`

export const StyledUl = styled.ul<{ $color?: ColorsTypes }>`
    ${({ $color }) => baseTextStyles({ fontSize: "body", color: $color })}
`
