/*=============================================== Toggle styles ===============================================*/

import styled from "styled-components"

import { COLORS, Mixins, RADIUSES, TRANSITIONS } from "components"

const StyledToggle = styled.label`
    position: relative;
    cursor: pointer;
    ${Mixins.Flexbox({
        inline: true,
        alignItems: "center",
        gap: "xxs",
    })}

    &:before, 
    &:after {
        content: "";
        transition: ${TRANSITIONS.SHORT};
    }

    &:before {
        width: 24px;
        height: 16px;
        border: 2px solid ${COLORS.PRIMARY};
        border-radius: ${RADIUSES.ROUND};
    }

    &:after {
        width: 8px;
        height: 8px;
        background-color: ${COLORS.PRIMARY};
        border-radius: ${RADIUSES.CIRCLE};
        position: absolute;
        left: 4px;
    }

    &:has(input:checked) {
        &:before {
            border-color: ${COLORS.SUCCESS};
            background-color: ${COLORS.SUCCESS};
        }

        &:after {
            background-color: ${COLORS.WHITE};
            left: 12px;
        }
    }
`

const Input = styled.input`
    display: none;
`

export { StyledToggle, Input }
