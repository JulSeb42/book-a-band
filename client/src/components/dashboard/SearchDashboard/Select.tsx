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

export function Select({
    id,
    label,
    helper,
    options,
    disabled,
    className,
    ...rest
}: SelectProps) {
    return (
        <InputContainer id={id} label={label} helper={helper}>
            <SelectContainer className={className}>
                <StyledSelect id={id} disabled={disabled} {...rest}>
                    {options.map((option, i) => (
                        <option value={option} key={i}>
                            {unslugify(option)}
                        </option>
                    ))}
                </StyledSelect>

                <InputRightContainer>
                    <Icon
                        src="chevron-down"
                        size={16}
                        color={disabled ? "gray" : "primary"}
                    />
                </InputRightContainer>
            </SelectContainer>
        </InputContainer>
    )
}
