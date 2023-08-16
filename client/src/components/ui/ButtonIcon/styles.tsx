/*=============================================== ButtonIcon styles ===============================================*/

import styled from "styled-components"

import {
    BREAKPOINTS,
    COLORS,
    Mixins,
    RADIUSES,
    SPACERS,
    TRANSITIONS,
    OVERLAYS,
} from "components"
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

export const ButtonContainer = styled.span<{ $size: number }>`
    position: relative;
    width: ${({ $size }) => $size}px;
    height: ${({ $size }) => $size}px;
`

export const Label = styled.span<{
    $isVisible: boolean
    $buttonSize: number
    $width: number
    $height: number
}>`
    position: absolute;
    top: calc(${({ $height }) => $height * -1}px - ${SPACERS.XS});
    left: calc(50% - ${({ $width }) => $width}px / 2);
    background-color: ${OVERLAYS.BLACK_80};
    color: ${COLORS.WHITE};
    border-radius: ${RADIUSES.S};
    padding: ${SPACERS.XXS} ${SPACERS.S};
    opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
    visibility: ${({ $isVisible }) => ($isVisible ? "visible" : "hidden")};
    text-align: center;
    transition: ${TRANSITIONS.SHORT};

    &:after {
        content: "";
        margin-left: 2px;
        border-width: 5px;
        border-style: solid;
        border-color: ${OVERLAYS.BLACK_80} transparent transparent transparent;
        z-index: 1;
        transition: ${TRANSITIONS.SHORT};
        position: absolute;
        left: calc(
            (${({ $width }) => $width}px + ${SPACERS.XXS} * 2) / 2 - 10px
        );
        bottom: calc(${SPACERS.XS} * -1 - 2px);
    }
`
