/*=============================================== Wrapper component ===============================================*/

import { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { StyledWrapper } from "components/layouts/Wrapper/styles"
import type { WrapperProps } from "components/layouts/Wrapper/types"

export const Wrapper = forwardRef(
    (
        { as, children, reverse }: WrapperProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        return (
            <StyledWrapper ref={ref} as={as} $reverseTablet={reverse}>
                {children}
            </StyledWrapper>
        )
    }
)
