/*=============================================== Form component ===============================================*/

import { forwardRef, type ForwardedRef } from "react"

import { Button, Flexbox } from "components"
import { ErrorMessage } from "errors"

import { StyledForm } from "components/forms/Form/styles"
import type { FormProps } from "components/forms/Form/types"

// function Ab 

export const Form = forwardRef(
    (
        {
            as,
            children,
            buttonPrimary,
            buttonSecondary,
            isLoading,
            error,
            ...rest
        }: FormProps,
        ref?: ForwardedRef<HTMLFormElement>
    ) => {
        return (
            <>
                <StyledForm ref={ref} as={as} {...rest}>
                    {children}

                    {(buttonPrimary || buttonSecondary) && (
                        <Flexbox gap="xs">
                            {buttonPrimary && (
                                <Button type="submit" isLoading={isLoading}>
                                    {buttonPrimary}
                                </Button>
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

                <ErrorMessage error={error} />
            </>
        )
    }
)
