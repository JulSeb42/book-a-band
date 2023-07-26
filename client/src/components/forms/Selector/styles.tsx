/*=============================================== Selector styles ===============================================*/

import styled, { css } from "styled-components"

import { COLORS, Mixins, RADIUSES, SPACERS, TRANSITIONS } from "components"

const Hover = css`
    &:hover {
        background-color: ${Mixins.ColorHoverHover({ color: "primary" })};
        color: ${COLORS.WHITE};
    }

    &:active {
        background-color: ${Mixins.ColorHoverActive({ color: "primary" })};
    }
`

export const StyledSelector = styled.label`
    background-color: ${COLORS.GRAY_GHOST};
    padding: 0 ${SPACERS.S};
    border-radius: ${RADIUSES.ROUND};
    cursor: pointer;
    transition: ${TRANSITIONS.SHORT};
    ${Hover}

    &:has(input:checked) {
        background-color: ${Mixins.ColorHoverDefault({ color: "primary" })};
        color: ${COLORS.WHITE};
        ${Hover}
    }
`

export const Input = styled.input`
    display: none;
`
