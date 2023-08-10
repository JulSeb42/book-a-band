/*=============================================== UserLine styles ===============================================*/

import styled from "styled-components"

import { Mixins } from "components"
import { BaseInputStyles } from "components/forms/InputComponents/styles"

export const StyledUserLine = styled.div`
    ${Mixins.Flexbox({
        gap: "xs",
    })}
`

export const Username = styled.div`
    flex-grow: 1;
    ${Mixins.Flexbox({
        gap: "xs",
    })}

    & > * {
        line-height: 32px;
    }
`

export const SelectContainer = styled.div`
    position: relative;
    width: 150px;
`

export const Select = styled.select`
    ${BaseInputStyles({})}
    cursor: pointer;
    appearance: none;
    position: relative;
    z-index: 0;

    &::-ms-expand {
        display: none;
    }
`
