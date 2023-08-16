/*=============================================== InputComponents component ===============================================*/

import { Icon, Skeleton, INPUT_HEIGHT } from "components"

import { FORM_VALIDATION } from "errors"

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
    InputValidationIconProps,
    InputContainerProps,
} from "components/forms/InputComponents/types"

export function InputRightContainer({ children }: InputRightContainerProps) {
    return <StyledRightContainer>{children}</StyledRightContainer>
}

export function InputIcon({ icon }: InputIconProps) {
    return (
        <IconContainer>
            <Icon src={icon} size={20} color="primary" />
        </IconContainer>
    )
}

export function InputValidationIcon({ status }: InputValidationIconProps) {
    if (!status) return null

    if (status === "not-passed")
        return <Icon src="close-circle" size={20} color="danger" />

    return <Icon src="check-circle" size={20} color="success" />
}

export function InputContainer({
    id,
    label,
    helper,
    children,
    isLoading,
    validation,
}: InputContainerProps) {
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
                        {helper.icon && (
                            <HelperIconContainer>
                                <Icon
                                    src={helper.icon}
                                    size={12}
                                    color={helper.iconColor || "primary"}
                                />
                            </HelperIconContainer>
                        )}

                        <Helper>{helper.text}</Helper>
                    </HelperContainer>
                ))}

            {validation?.status && (
                <HelperContainer>
                    <HelperIconContainer>
                        <Icon
                            src={
                                validation.status === "not-passed"
                                    ? FORM_VALIDATION.ICON_NOT_PASSED
                                    : FORM_VALIDATION.ICON_PASSED
                            }
                            size={12}
                            color={
                                validation.status === "not-passed"
                                    ? FORM_VALIDATION.ICON_COLOR_NOT_PASSED
                                    : FORM_VALIDATION.ICON_COLOR_PASSED
                            }
                        />
                    </HelperIconContainer>

                    <Helper>{validation.message}</Helper>
                </HelperContainer>
            )}
        </StyledInputContainer>
    )
}
