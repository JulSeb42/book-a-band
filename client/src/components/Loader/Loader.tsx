/*=============================================== Loader component ===============================================*/

import { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { StyledLoader } from "components/Loader/styles"
import type { LoaderProps } from "components/Loader/types"

export const Loader = forwardRef(
    ({ as }: LoaderProps, ref?: ForwardedRef<HTMLDivElement>) => {
        return (
            <StyledLoader ref={ref} as={as}>
                <span />
                <span />
                <span />
            </StyledLoader>
        )
    }
)
