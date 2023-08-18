/*=============================================== Alert component ===============================================*/

import { forwardRef, type ForwardedRef } from "react"

import { Text } from "components"

import { StyledAlert } from "components/ui/Alert/styles"
import type { AlertProps } from "components/ui/Alert/types"

export const Alert = forwardRef(
    (
        { children, onSubmit }: AlertProps,
        ref?: ForwardedRef<HTMLDivElement & HTMLFormElement>
    ) => {
        return (
            <StyledAlert
                as={
                    typeof children === "string"
                        ? Text
                        : onSubmit
                        ? "form"
                        : "div"
                }
                onSubmit={onSubmit}
                ref={ref}
            >
                {children}
            </StyledAlert>
        )
    }
)
