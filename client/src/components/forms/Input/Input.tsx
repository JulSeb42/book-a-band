/*=============================================== Input component ===============================================*/

import { forwardRef } from "react"
import type { ForwardedRef } from "react"

import {
    InputIcon,
    InputRightContainer,
    InputValidation,
    InputContainer,
} from "components/forms/InputComponents"

import { StyledInput, InputContent } from "components/forms/Input/styles"
import type { InputProps } from "components/forms/Input/types"

const InputFn = forwardRef(
    (
        { type, icon, validation, ...rest }: InputProps,
        ref?: ForwardedRef<HTMLInputElement & HTMLTextAreaElement>
    ) => {
        if (type === "textarea")
            return (
                <StyledInput
                    as="textarea"
                    $validation={validation}
                    $isTextarea
                    {...rest}
                />
            )

        const inputFn = () => (
            <StyledInput
                ref={ref}
                type={type}
                $validation={validation}
                $hasIcon={!!icon}
                {...rest}
            />
        )

        return icon || validation ? (
            <InputContent>
                {icon && <InputIcon icon={icon} />}

                {inputFn()}

                {validation && (
                    <InputRightContainer>
                        <InputValidation status={validation} />
                    </InputRightContainer>
                )}
            </InputContent>
        ) : (
            inputFn()
        )
    }
)

export const Input = forwardRef(
    (
        { id, label, helper, ...rest }: InputProps,
        ref?: ForwardedRef<HTMLInputElement & HTMLTextAreaElement>
    ) => {
        const inputFn = () => <InputFn ref={ref} id={id} {...rest} />

        if (label || helper)
            return (
                <InputContainer label={label} helper={helper} id={id}>
                    {inputFn()}
                </InputContainer>
            )

        return inputFn()
    }
)
