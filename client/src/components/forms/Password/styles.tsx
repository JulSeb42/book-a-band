/*=============================================== Password styles ===============================================*/

import styled from "styled-components"

import { BREAKPOINTS, INPUT_HEIGHT, Mixins, TRANSITIONS } from "components"
import { BaseInputStyles } from "components/forms/InputComponents/styles"

import type { ValidationStatusType } from "types"

export const Input = styled.input<{
    $validation?: ValidationStatusType
    $hasIcon?: boolean
}>`
    ${BaseInputStyles}
`

export const PasswordButton = styled.button`
    width: fit-content;
    height: ${INPUT_HEIGHT}px;
    padding: 0;
    border: none;
    background-color: transparent;
    transition: ${TRANSITIONS.SHORT};
    color: ${Mixins.ColorHoverDefault({ color: "primary" })};
    ${Mixins.Flexbox({
        inline: true,
        alignItems: "center",
        justifyContent: "flex-end",
    })}

    @media ${BREAKPOINTS.HOVER} {
        &:hover {
            color: ${Mixins.ColorHoverHover({ color: "primary" })};
        }

        &:active {
            color: ${Mixins.ColorHoverActive({ color: "primary" })};
        }
    }
`
