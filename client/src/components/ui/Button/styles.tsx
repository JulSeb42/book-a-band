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
} from "components"

import type { ColorsHoverTypes } from "components/types"
import type {
    ButtonSizesTypes,
    ButtonVariantsTypes,
} from "components/ui/Button/types"

export const StyledButton = styled.button<{
    $variant?: ButtonVariantsTypes
    $size?: ButtonSizesTypes
    $color: ColorsHoverTypes
    $noPadding?: boolean
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
    ${Mixins.Flexbox({
        inline: true,
        alignItems: "center",
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

                  &:hover {
                      background-color: ${Mixins.ColorHoverHover({
                          color: $color,
                      })};
                  }

                  &:active {
                      background-color: ${Mixins.ColorHoverActive({
                          color: $color,
                      })};
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

                  &:hover {
                      color: ${Mixins.ColorHoverHover({
                          color: $color,
                      })};
                  }

                  &:active {
                      color: ${Mixins.ColorHoverActive({
                          color: $color,
                      })};
                  }

                  &:disabled {
                      color: ${COLORS.GRAY};
                  }
              `}
`
