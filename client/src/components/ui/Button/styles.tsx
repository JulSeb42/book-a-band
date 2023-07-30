/*=============================================== Button styles ===============================================*/

import styled, { css } from "styled-components"

import {
    Mixins,
    FONT_SIZES,
    FONT_WEIGHTS,
    FONT_FAMILY,
    COLORS,
    SPACERS,
    RADIUSES,
    TRANSITIONS,
    LINE_HEIGHT,
    BREAKPOINTS,
} from "components"

import type { ColorsHoverType, AlignSelfType } from "components/types"
import type {
    ButtonSizesType,
    ButtonVariantsType,
} from "components/ui/Button/types"

export const StyledButton = styled.button<{
    $variant?: ButtonVariantsType
    $size?: ButtonSizesType
    $color: ColorsHoverType
    $noPadding?: boolean
    $alignSelf?: AlignSelfType
}>`
    border: none;
    text-decoration: none;
    font-family: ${FONT_FAMILY};
    font-weight: ${FONT_WEIGHTS.BOLD};
    line-height: ${LINE_HEIGHT};
    font-size: ${({ $size }) =>
        $size === "small" ? FONT_SIZES.SMALL : FONT_SIZES.BODY};
    padding: ${({ $size, $noPadding }) =>
        $noPadding
            ? "0"
            : $size === "small"
            ? `${SPACERS.XXS} ${SPACERS.XS}`
            : `${SPACERS.XS} ${SPACERS.S}`};
    border-radius: ${RADIUSES.M};
    transition: ${TRANSITIONS.SHORT};
    align-self: ${({ $alignSelf }) => $alignSelf};
    ${Mixins.Flexbox({
        inline: true,
        alignItems: "center",
        justifyContent: "center",
        gap: "xs",
    })};

    &:disabled {
        cursor: not-allowed;
    }

    ${({ $variant, $color }) =>
        $variant === "plain"
            ? css`
                  background-color: ${Mixins.ColorHoverDefault({
                      color: $color,
                  })};
                  color: ${$color === "white" ? COLORS.PRIMARY : COLORS.WHITE};

                  @media ${BREAKPOINTS.HOVER} {
                      &:not(:disabled):hover {
                          background-color: ${Mixins.ColorHoverHover({
                              color: $color,
                          })};
                      }

                      &:not(:disabled):active {
                          background-color: ${Mixins.ColorHoverActive({
                              color: $color,
                          })};
                      }
                  }

                  &:disabled {
                      background-color: ${COLORS.GRAY_GHOST};
                      color: ${COLORS.GRAY};
                  }
              `
            : $variant === "transparent" &&
              css`
                  background-color: transparent;
                  color: ${Mixins.ColorHoverDefault({
                      color: $color,
                  })};

                  @media ${BREAKPOINTS.HOVER} {
                      &:not(:disabled):hover {
                          color: ${Mixins.ColorHoverHover({
                              color: $color,
                          })};
                      }

                      &:not(:disabled):active {
                          color: ${Mixins.ColorHoverActive({
                              color: $color,
                          })};
                      }

                      &:disabled {
                          color: ${COLORS.GRAY};
                      }
                  }
              `}
`
