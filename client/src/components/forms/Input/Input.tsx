/*=============================================== Input component ===============================================*/

import { forwardRef, type ForwardedRef } from "react"

import { Key } from "components"
import {
    InputIcon,
    InputRightContainer,
    InputValidationIcon,
    InputContainer,
} from "components/forms/InputComponents"
import { useTouchScreen } from "hooks"

import { StyledInput, InputContent } from "components/forms/Input/styles"
import type { InputProps } from "components/forms/Input/types"

const InputFn = forwardRef(
    (
        { type, icon, validation, keys, ...rest }: InputProps,
        ref?: ForwardedRef<HTMLInputElement & HTMLTextAreaElement>
    ) => {
        const isTouchScreen = useTouchScreen()

        if (type === "textarea")
            return (
                <StyledInput
                    as="textarea"
                    ref={ref}
                    $validation={validation?.status}
                    $isTextarea
                    {...rest}
                />
            )

        const inputFn = () => {
            return (
                <StyledInput
                    type={type}
                    ref={ref}
                    $validation={validation?.status}
                    $hasIcon={!!icon}
                    {...rest}
                />
            )
        }

        return icon || validation ? (
            <InputContent>
                {icon && <InputIcon icon={icon} />}

                {inputFn()}

                {(validation || keys) && (
                    <InputRightContainer>
                        {keys && !isTouchScreen && <Key keys={keys} />}

                        {validation && (
                            <InputValidationIcon status={validation?.status} />
                        )}
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
        { id, label, helper, isLoading, validation, ...rest }: InputProps,
        ref?: ForwardedRef<HTMLInputElement & HTMLTextAreaElement>
    ) => {
        return (
            <InputContainer
                label={label}
                helper={helper}
                id={id}
                isLoading={isLoading}
                validation={validation}
            >
                <InputFn ref={ref} id={id} validation={validation} {...rest} />
            </InputContainer>
        )
    }
)
