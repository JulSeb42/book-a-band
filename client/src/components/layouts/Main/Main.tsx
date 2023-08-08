/*=============================================== Main component ===============================================*/

import { forwardRef, type ForwardedRef } from "react"

import { StyledMain } from "components/layouts/Main/styles"
import type { MainProps } from "components/layouts/Main/types"

export const Main = forwardRef(
    ({ as, children, size }: MainProps, ref?: ForwardedRef<HTMLDivElement>) => {
        return (
            <StyledMain as={as} ref={ref} $size={size}>
                {children}
            </StyledMain>
        )
    }
)
