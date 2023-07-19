/*=============================================== Main component ===============================================*/

import { forwardRef } from "react"
import type { ForwardedRef } from "react"
import classNames from "classnames"

import { CONTAINERS } from "components"

import { StyledMain } from "components/layouts/Main/styles"
import type { MainProps } from "components/layouts/Main/types"

export const Main = forwardRef(
    (
        { as, children, className, size, style }: MainProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        return (
            <StyledMain
                as={as}
                ref={ref}
                className={classNames(className)}
                style={{
                    ["--main-width" as any]:
                        size === "form"
                            ? CONTAINERS.MAIN.FORM
                            : size === "default"
                            ? CONTAINERS.MAIN.DEFAULT
                            : null,
                    ...style,
                }}
            >
                {children}
            </StyledMain>
        )
    }
)
