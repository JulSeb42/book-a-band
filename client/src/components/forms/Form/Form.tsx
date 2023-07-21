/*=============================================== Form component ===============================================*/

import { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { StyledForm } from "components/forms/Form/styles"
import type { FormProps } from "components/forms/Form/types"

export const Form = forwardRef(
    (
        { as, children, ...rest }: FormProps,
        ref?: ForwardedRef<HTMLFormElement>
    ) => {
        return (
            <StyledForm ref={ref} as={as} {...rest}>
                {children}
            </StyledForm>
        )
    }
)
