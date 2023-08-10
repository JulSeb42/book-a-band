/*=============================================== SearchDashboard styles ===============================================*/

import styled from "styled-components"

import { Mixins } from "components"
import { BaseInputStyles } from "components/forms/InputComponents/styles"

export const StyledSearchDashboard = styled.div`
    ${Mixins.Flexbox({
        gap: "xs",
    })}

    & > * {
        width: 100%;
    }
`

export const SelectContainer = styled.div`
    position: relative;
`

export const StyledSelect = styled.select`
    cursor: pointer;
    appearance: none;
    ${BaseInputStyles({})}

    &::-ms-expand {
        display: none;
    }

    &.disabled {
        cursor: not-allowed;
    }
`
