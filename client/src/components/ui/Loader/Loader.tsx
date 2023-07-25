/*=============================================== Loader component ===============================================*/

import { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { StyledLoader } from "components/ui/Loader/styles"
import type { LoaderProps } from "components/ui/Loader/types"

export const Loader = forwardRef(
    (
        { as, size = 24, color = "primary" }: LoaderProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        return (
            <StyledLoader ref={ref} as={as} $size={size} $color={color}>
                <span />
                <span />
                <span />
            </StyledLoader>
        )
    }
)
