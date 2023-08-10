/*=============================================== Select ===============================================*/

import type { SelectHTMLAttributes } from "react"
import { unslugify } from "ts-utils-julseb"

import { Icon } from "components"

import {
    InputContainer,
    InputRightContainer,
} from "components/forms/InputComponents"
import type { InputContainerBaseProps } from "components/forms/InputComponents/types"

import {
    SelectContainer,
    StyledSelect,
} from "components/dashboard/SearchDashboard/styles"

interface SelectProps
    extends InputContainerBaseProps,
        SelectHTMLAttributes<HTMLSelectElement> {
    options: string[]
}

export const Select = ({
    id,
    label,
    helper,
    options,
    ...rest
}: SelectProps) => {
    return (
        <InputContainer id={id} label={label} helper={helper}>
            <SelectContainer>
                <StyledSelect id={id} {...rest}>
                    {options.map((option, i) => (
                        <option value={option} key={i}>
                            {unslugify(option)}
                        </option>
                    ))}
                </StyledSelect>

                <InputRightContainer>
                    <Icon src="chevron-down" size={16} color="primary" />
                </InputRightContainer>
            </SelectContainer>
        </InputContainer>
    )
}
