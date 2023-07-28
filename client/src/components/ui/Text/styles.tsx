/*=============================================== Text styles ===============================================*/

import styled, { css } from "styled-components"
import {
    FONT_FAMILY,
    LINE_HEIGHT,
    FONT_WEIGHTS,
    COLORS,
    TRANSITIONS,
    Mixins,
    BREAKPOINTS,
} from "components"
import { generateFontSize } from "components/ui/Text/generate-font-size"
import type { FontSizesType, ColorsType } from "components/types"

const baseTextStyles = ({
    fontSize,
    color,
    maxLines,
}: {
    fontSize: FontSizesType | "inherit"
    color?: ColorsType
    maxLines?: number
}) => css`
    font-family: ${FONT_FAMILY};
    line-height: ${LINE_HEIGHT};
    font-size: ${Mixins.FontSize(fontSize)};
    color: currentColor;
    color: ${Mixins.Color({ color: color || "currentColor" })};

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

        @media ${BREAKPOINTS.HOVER} {
            &:hover {
                color: ${COLORS.PRIMARY_HOVER};
            }

            &:active {
                color: ${COLORS.PRIMARY_ACTIVE};
            }
        }
    }

    ${maxLines &&
    (maxLines === 1
        ? css`
              white-space: nowrap;
              overflow: hidden;
              display: block;
              text-overflow: ellipsis;

              & > * {
                  white-space: nowrap;
                  overflow: hidden;
                  display: block;
                  text-overflow: ellipsis;
              }
          `
        : css`
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: ${maxLines};
              line-clamp: ${maxLines};
              -webkit-box-orient: vertical;

              & > * {
                  overflow: hidden;
                  text-overflow: ellipsis;
                  display: -webkit-box;
                  -webkit-line-clamp: ${maxLines};
                  line-clamp: ${maxLines};
                  -webkit-box-orient: vertical;
              }
          `)}
`

export const StyledH1 = styled.h1<{ $color?: ColorsType; $maxLines?: number }>`
    font-weight: ${FONT_WEIGHTS.BLACK};
    ${({ $color, $maxLines }) =>
        baseTextStyles({ fontSize: "h1", color: $color, maxLines: $maxLines })}
`

export const StyledH2 = styled.h2<{ $color?: ColorsType; $maxLines?: number }>`
    font-weight: ${FONT_WEIGHTS.BLACK};
    ${({ $color, $maxLines }) =>
        baseTextStyles({ fontSize: "h2", color: $color, maxLines: $maxLines })}
`

export const StyledH3 = styled.h3<{ $color?: ColorsType; $maxLines?: number }>`
    font-weight: ${FONT_WEIGHTS.BLACK};
    ${({ $color, $maxLines }) =>
        baseTextStyles({ fontSize: "h3", color: $color, maxLines: $maxLines })}
`

export const StyledH4 = styled.h4<{ $color?: ColorsType; $maxLines?: number }>`
    font-weight: ${FONT_WEIGHTS.BLACK};
    ${({ $color, $maxLines }) =>
        baseTextStyles({ fontSize: "h4", color: $color, maxLines: $maxLines })}
`

export const StyledH5 = styled.h5<{ $color?: ColorsType; $maxLines?: number }>`
    font-weight: ${FONT_WEIGHTS.BLACK};
    ${({ $color, $maxLines }) =>
        baseTextStyles({ fontSize: "h5", color: $color, maxLines: $maxLines })}
`

export const StyledH6 = styled.h6<{ $color?: ColorsType; $maxLines?: number }>`
    font-weight: ${FONT_WEIGHTS.BLACK};
    ${({ $color, $maxLines }) =>
        baseTextStyles({ fontSize: "h6", color: $color, maxLines: $maxLines })}
`

export const StyledP = styled.p<{ $color?: ColorsType; $maxLines?: number }>`
    ${({ $color, $maxLines }) =>
        baseTextStyles({
            fontSize: "body",
            color: $color,
            maxLines: $maxLines,
        })}
`

export const StyledStrong = styled.strong<{
    $color?: ColorsType
    $maxLines?: number
}>`
    font-weight: ${FONT_WEIGHTS.BLACK};
    ${({ $color, $maxLines }) =>
        baseTextStyles({
            fontSize: "inherit",
            color: $color,
            maxLines: $maxLines,
        })}
`

export const StyledEm = styled.em<{ $color?: ColorsType; $maxLines?: number }>`
    font-style: italic;
    ${({ $color, $maxLines }) =>
        baseTextStyles({
            fontSize: "inherit",
            color: $color,
            maxLines: $maxLines,
        })}
`

export const StyledSmall = styled.small<{
    $color?: ColorsType
    $maxLines?: number
}>`
    ${({ $color, $maxLines }) =>
        baseTextStyles({
            fontSize: "small",
            color: $color,
            maxLines: $maxLines,
        })}
`

export const StyledUl = styled.ul<{ $color?: ColorsType; $maxLines?: number }>`
    ${({ $color, $maxLines }) =>
        baseTextStyles({
            fontSize: "body",
            color: $color,
            maxLines: $maxLines,
        })}
`
