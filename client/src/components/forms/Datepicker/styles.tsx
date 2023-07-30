/*=============================================== Datepicker styles ===============================================*/

import styled from "styled-components"
import ReactDatePicker from "react-datepicker"

import { BaseInputStyles } from "components/forms/InputComponents/styles"

export const StyledDatepicker = styled(ReactDatePicker)`
    ${BaseInputStyles({})}
    cursor: pointer;

    .react-datepicker__day--disabled {
        cursor: not-allowed;
    }
`
