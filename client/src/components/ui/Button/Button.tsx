/*=============================================== Button component ===============================================*/

import { forwardRef } from "react"
import type { ForwardedRef } from "react"
import { Link } from "react-router-dom"
import classNames from "classnames"

import { Icon } from "components"

import { StyledButton } from "components/ui/Button/styles"
import type { ButtonProps } from "components/ui/Button/types"

export const Button = forwardRef(
    (
        {
            as,
            color = "primary",
            size = "default",
            isLoading,
            icons,
            variant,
            noPadding,
            disabled,
            type = "button",
            to,
            blank,
            children,
            className,
            ...rest
        }: ButtonProps,
        ref?: ForwardedRef<HTMLButtonElement>
    ) => {
        return (
            <StyledButton
                ref={ref}
                as={as ? as : to ? Link : "button"}
                to={to}
                disabled={disabled || isLoading}
                type={type}
                target={blank ? "_blank" : null}
                rel={blank ? "noreferrer noopener" : null}
                data-color={color}
                data-size={size}
                data-variant={variant}
                className={classNames(className, { "no-padding": noPadding })}
                {...rest}
            >
                {icons?.left && (
                    <Icon src={icons.left} size={size === "small" ? 14 : 16} />
                )}

                {children}

                {icons?.right && (
                    <Icon src={icons.right} size={size === "small" ? 14 : 16} />
                )}
            </StyledButton>
        )
    }
)
