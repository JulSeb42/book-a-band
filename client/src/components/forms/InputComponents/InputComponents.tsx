/*=============================================== InputComponents component ===============================================*/

import { Icon, Skeleton, INPUT_HEIGHT } from "components"

import {
    StyledRightContainer,
    IconContainer,
    Helper,
    HelperContainer,
    Label,
    StyledInputContainer,
    HelperIconContainer,
} from "components/forms/InputComponents/styles"
import type {
    InputRightContainerProps,
    InputIconProps,
    InputValidationProps,
    InputContainerProps,
} from "components/forms/InputComponents/types"

export const InputRightContainer = ({ children }: InputRightContainerProps) => {
    return <StyledRightContainer>{children}</StyledRightContainer>
}

export const InputIcon = ({ icon }: InputIconProps) => {
    return (
        <IconContainer>
            <Icon src={icon} size={20} color="primary" />
        </IconContainer>
    )
}

export const InputValidation = ({ status }: InputValidationProps) => {
    if (!status) return null

    if (status === "not-passed")
        return <Icon src="close-circle" size={20} color="danger" />

    return <Icon src="check-circle" size={20} color="success" />
}

export const InputContainer = ({
    id,
    label,
    helper,
    children,
    isLoading,
}: InputContainerProps) => {
    const input = () =>
        isLoading ? (
            <Skeleton height={INPUT_HEIGHT} borderRadius="s" isShining />
        ) : (
            children
        )

    if (!label && !helper) return input()

    return (
        <StyledInputContainer>
            {label && <Label htmlFor={id}>{label}</Label>}

            {input()}

            {helper &&
                (typeof helper === "string" ? (
                    <Helper>{helper}</Helper>
                ) : (
                    <HelperContainer>
                        <HelperIconContainer>
                            <Icon
                                src={helper.icon!}
                                color={helper.iconColor || "success"}
                                size={12}
                            />
                        </HelperIconContainer>

                        <Helper>{helper.text}</Helper>
                    </HelperContainer>
                ))}
        </StyledInputContainer>
    )
}
