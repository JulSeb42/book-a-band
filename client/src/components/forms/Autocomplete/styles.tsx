/*=============================================== Autocomplete styles ===============================================*/

import styled, { css } from "styled-components"

import {
    BREAKPOINTS,
    COLORS,
    INPUT_HEIGHT,
    Mixins,
    RADIUSES,
    SPACERS,
    TRANSITIONS,
} from "components"
import { BaseInputStyles } from "components/forms/InputComponents/styles"
import type { ValidationStatusType } from "types"

export const StyledAutocomplete = styled.div<{ $isOpen: boolean }>`
    position: relative;
    z-index: ${({ $isOpen }) => ($isOpen ? 20 : 1)};
`

export const StyledInput = styled.input<{
    $hasIcon?: boolean
    $validation?: ValidationStatusType
}>`
    ${BaseInputStyles};
    z-index: 1;
`

export const List = styled.div<{ $isOpen: boolean }>`
    border: 1px solid
        ${({ $isOpen }) => ($isOpen ? COLORS.PRIMARY : "transparent")};
    position: absolute;
    top: calc(${INPUT_HEIGHT}px / 2);
    padding-top: ${({ $isOpen }) =>
        $isOpen ? `calc(${INPUT_HEIGHT}px / 2)` : 0};
    transition: ${TRANSITIONS.SHORT};
    z-index: 0;
    width: 100%;
    max-height: ${({ $isOpen }) => ($isOpen ? "200px" : 0)};
    overflow: hidden;
    overflow-y: scroll;
    border-radius: 0 0 ${RADIUSES.M} ${RADIUSES.M};
    ${Mixins.Flexbox({
        flexDirection: "column",
        alignItems: "stretch",
    })}
    ${Mixins.HideScrollbar};
`

const HoverStyles = css`
    background-color: ${Mixins.ColorHoverHover({
        color: "primary",
    })};
    color: ${COLORS.WHITE};
`

export const ListItem = styled.span<{
    $isActive: boolean
    $isHovered: boolean
    $isReadOnly?: boolean
}>`
    background-color: ${({ $isActive, $isReadOnly }) =>
        $isActive && !$isReadOnly
            ? Mixins.ColorHoverDefault({ color: "primary" })
            : COLORS.WHITE};
    color: ${({ $isActive, $isReadOnly }) =>
        $isActive && !$isReadOnly ? COLORS.WHITE : COLORS.BLACK};
    padding: ${SPACERS.XXS} ${SPACERS.XS};
    transition: ${TRANSITIONS.SHORT};
    cursor: ${({ $isReadOnly }) => !$isReadOnly && "pointer"};

    ${({ $isReadOnly, $isHovered }) =>
        $isReadOnly
            ? css`
                  color: ${COLORS.GRAY};
              `
            : $isHovered
            ? HoverStyles
            : css`
                  @media ${BREAKPOINTS.HOVER} {
                      &:hover {
                          ${HoverStyles}
                      }

                      &:active {
                          background-color: ${Mixins.ColorHoverActive({
                              color: "primary",
                          })};
                      }
                  }
              `}
`
