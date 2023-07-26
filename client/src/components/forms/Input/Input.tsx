/*=============================================== Input component ===============================================*/

import { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { Key } from "components"
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
        { type, icon, validation, keys, ...rest }: InputProps,
        ref?: ForwardedRef<HTMLInputElement & HTMLTextAreaElement>
    ) => {
        if (type === "textarea")
            return (
                <StyledInput
                    as="textarea"
                    ref={ref}
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

                {(validation || keys) && (
                    <InputRightContainer>
                        {keys && <Key keys={keys} />}
                        {validation && <InputValidation status={validation} />}
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
        { id, label, helper, isLoading, ...rest }: InputProps,
        ref?: ForwardedRef<HTMLInputElement & HTMLTextAreaElement>
    ) => {
        return (
            <InputContainer
                label={label}
                helper={helper}
                id={id}
                isLoading={isLoading}
            >
                <InputFn ref={ref} id={id} {...rest} />
            </InputContainer>
        )
    }
)
