/*=============================================== ButtonIcon component ===============================================*/

import { forwardRef } from "react"
import type { ForwardedRef } from "react"
import { Link } from "react-router-dom"

import { Icon, Loader } from "components"

import { StyledButtonIcon } from "components/ui/ButtonIcon/styles"
import type { ButtonIconProps } from "components/ui/ButtonIcon/types"

export const ButtonIcon = forwardRef(
    (
        {
            as,
            icon,
            color = "primary",
            variant = "plain",
            size = 32,
            isLoading,
            disabled,
            type = "button",
            to,
            blank,
        }: ButtonIconProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        return (
            <StyledButtonIcon
                ref={ref}
                as={as ? as : to ? Link : "button"}
                disabled={isLoading || disabled}
                type={type}
                to={to}
                target={blank ? "_blank" : null}
                rel={blank ? "noreferrer noopener" : null}
                $variant={variant}
                $color={color}
                $size={size}
            >
                {isLoading ? (
                    <Loader size={size * 0.7} color="gray" />
                ) : (
                    <Icon src={icon} size={size * 0.7} />
                )}
            </StyledButtonIcon>
        )
    }
)
