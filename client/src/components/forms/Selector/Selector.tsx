/*=============================================== Selector component ===============================================*/

import { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { StyledSelector, Input } from "components/forms/Selector/styles"
import type { SelectorProps } from "components/forms/Selector/types"

export const Selector = forwardRef(
    (
        {
            type = "checkbox",
            label,
            id,
            name,
            defaultChecked,
            onChange,
        }: SelectorProps,
        ref?: ForwardedRef<HTMLLabelElement>
    ) => {
        return (
            <StyledSelector ref={ref} htmlFor={id}>
                <Input
                    type={type}
                    id={id}
                    name={name}
                    defaultChecked={defaultChecked}
                    onChange={onChange}
                />

                {label}
            </StyledSelector>
        )
    }
)
