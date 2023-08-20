/*=============================================== Datepicker component ===============================================*/

import "react-datepicker/dist/react-datepicker.css"

import { InputContainer } from "components/forms/InputComponents"

import { StyledDatepicker } from "components/forms/Datepicker/styles"
import type { DatepickerProps } from "components/forms/Datepicker/types"

export function Datepicker({
    id,
    label,
    helper,
    isLoading,
    ...rest
}: DatepickerProps) {
    return (
        <InputContainer
            id={id}
            label={label}
            helper={helper}
            isLoading={isLoading}
        >
            <StyledDatepicker
                showYearDropdown
                showMonthDropdown
                dateFormat="yyyy-MM-dd"
                {...rest}
            />
        </InputContainer>
    )
}
