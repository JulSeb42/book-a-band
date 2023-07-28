/*=============================================== Form component ===============================================*/

import { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { Button, Flexbox } from "components"

import { StyledForm } from "components/forms/Form/styles"
import type { FormProps } from "components/forms/Form/types"

export const Form = forwardRef(
    (
        { as, children, buttonPrimary, buttonSecondary, ...rest }: FormProps,
        ref?: ForwardedRef<HTMLFormElement>
    ) => {
        return (
            <StyledForm ref={ref} as={as} {...rest}>
                {children}

                {(buttonPrimary || buttonSecondary) && (
                    <Flexbox gap="xs">
                        {buttonPrimary && (
                            <Button type="submit">{buttonPrimary}</Button>
                        )}

                        {buttonSecondary && (
                            <Button
                                variant="transparent"
                                to={buttonSecondary.to}
                                onClick={buttonSecondary.onClick}
                            >
                                {buttonSecondary.text}
                            </Button>
                        )}
                    </Flexbox>
                )}
            </StyledForm>
        )
    }
)
