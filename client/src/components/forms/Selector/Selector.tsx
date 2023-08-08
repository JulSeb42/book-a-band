/*=============================================== Selector component ===============================================*/

import { forwardRef, type ForwardedRef } from "react"

import { StyledSelector, Input } from "components/forms/Selector/styles"
import type { SelectorProps } from "components/forms/Selector/types"

export const Selector = forwardRef(
    (
        {
            type = "checkbox",
            label,
            id,
            name,
            checked,
            onChange,
            value,
        }: SelectorProps,
        ref?: ForwardedRef<HTMLLabelElement>
    ) => {
        return (
            <StyledSelector ref={ref} htmlFor={id}>
                <Input
                    type={type}
                    id={id}
                    name={name}
                    onChange={onChange}
                    value={value}
                    checked={checked}
                />

                {label}
            </StyledSelector>
        )
    }
)
