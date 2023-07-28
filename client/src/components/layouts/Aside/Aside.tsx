/*=============================================== Aside component ===============================================*/

import { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { StyledAside } from "components/layouts/Aside/styles"
import type { AsideProps } from "components/layouts/Aside/types"

export const Aside = forwardRef(
    (
        { as, children, center, gap = "l" }: AsideProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        return (
            <StyledAside ref={ref} as={as} $center={center} $gap={gap}>
                {children}
            </StyledAside>
        )
    }
)
