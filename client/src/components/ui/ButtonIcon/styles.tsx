/*=============================================== ButtonIcon styles ===============================================*/

import styled from "styled-components"

import { BREAKPOINTS, COLORS, Mixins, RADIUSES, TRANSITIONS } from "components"
import type { ButtonIconStyleProps } from "components/ui/ButtonIcon/types"

export const StyledButtonIcon = styled.button<ButtonIconStyleProps>`
    width: ${({ $size }) => $size}px;
    height: ${({ $size }) => $size}px;
    border-radius: ${RADIUSES.CIRCLE};
    border: none;
    background-color: ${({ $variant, $color }) =>
        $variant === "plain"
            ? Mixins.ColorHoverDefault({ color: $color })
            : $variant === "ghost"
            ? Mixins.ColorGhostDefault({ color: $color })
            : "transparent"};
    color: ${({ $variant, $color }) =>
        $variant === "plain"
            ? $color === "white"
                ? COLORS.PRIMARY
                : COLORS.WHITE
            : Mixins.ColorHoverDefault({ color: $color })};
    transition: ${TRANSITIONS.SHORT};
    ${Mixins.Flexbox({
        inline: true,
        alignItems: "center",
        justifyContent: "center",
    })}

    &:disabled {
        color: ${COLORS.GRAY};
        background-color: ${({ $variant }) =>
            $variant === "plain" && COLORS.GRAY_GHOST};
    }

    @media ${BREAKPOINTS.HOVER} {
        &:not(:disabled):hover {
            background-color: ${({ $variant, $color }) =>
                $variant === "plain"
                    ? Mixins.ColorHoverHover({ color: $color })
                    : $variant === "ghost" &&
                      Mixins.ColorGhostHover({ color: $color })};
            color: ${({ $variant, $color }) =>
                $variant === "transparent" &&
                Mixins.ColorHoverHover({ color: $color })};
        }

        &:not(:disabled):active {
            background-color: ${({ $variant, $color }) =>
                $variant === "plain"
                    ? Mixins.ColorHoverActive({ color: $color })
                    : $variant === "ghost" &&
                      Mixins.ColorGhostActive({ color: $color })};
            color: ${({ $variant, $color }) =>
                $variant === "transparent" &&
                Mixins.ColorHoverActive({ color: $color })};
        }
    }
`
