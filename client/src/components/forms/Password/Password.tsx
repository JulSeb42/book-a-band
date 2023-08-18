/*=============================================== Password component ===============================================*/

import { forwardRef, useState, type ForwardedRef } from "react"

import {
    InputContainer,
    InputValidationIcon,
    InputRightContainer,
    InputIcon,
    InputButton,
} from "components/forms/InputComponents"
import { InputContent } from "components/forms/Input/styles"

import { Input } from "components/forms/Password/styles"
import type { PasswordProps } from "components/forms/Password/types"

export const Password = forwardRef(
    (
        {
            icon,
            label,
            helper,
            id,
            isLoading,
            validation,
            ...rest
        }: PasswordProps,
        ref?: ForwardedRef<HTMLInputElement>
    ) => {
        const [type, setType] = useState<"text" | "password">("password")

        return (
            <InputContainer
                label={label}
                helper={helper}
                id={id}
                isLoading={isLoading}
                validation={validation}
            >
                <InputContent>
                    {icon && <InputIcon icon={icon} />}

                    <Input
                        id={id}
                        type={type}
                        ref={ref}
                        $hasIcon={!!icon}
                        $validation={validation?.status}
                        {...rest}
                    />

                    <InputRightContainer>
                        {validation && (
                            <InputValidationIcon status={validation?.status} />
                        )}

                        <InputButton
                            onClick={() =>
                                setType(
                                    type === "password" ? "text" : "password"
                                )
                            }
                            icon={type === "password" ? "hide" : "show"}
                            label="Password button"
                        />
                    </InputRightContainer>
                </InputContent>
            </InputContainer>
        )
    }
)
