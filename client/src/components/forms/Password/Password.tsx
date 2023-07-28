/*=============================================== Password component ===============================================*/

import { forwardRef, useState } from "react"
import type { ForwardedRef } from "react"

import { Icon } from "components"
import {
    InputContainer,
    InputValidation,
    InputRightContainer,
    InputIcon,
} from "components/forms/InputComponents"
import { InputContent } from "components/forms/Input/styles"

import { Input, PasswordButton } from "components/forms/Password/styles"
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
            >
                <InputContent>
                    {icon && <InputIcon icon={icon} />}

                    <Input
                        id={id}
                        type={type}
                        ref={ref}
                        $hasIcon={!!icon}
                        $validation={validation}
                        {...rest}
                    />

                    <InputRightContainer>
                        {validation && <InputValidation status={validation} />}

                        <PasswordButton
                            onClick={() =>
                                setType(
                                    type === "password" ? "text" : "password"
                                )
                            }
                            type="button"
                        >
                            <Icon
                                src={type === "password" ? "hide" : "show"}
                                size={16}
                            />
                        </PasswordButton>
                    </InputRightContainer>
                </InputContent>
            </InputContainer>
        )
    }
)
