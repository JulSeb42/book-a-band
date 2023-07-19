/*=============================================== Aside component ===============================================*/

import { forwardRef } from "react"
// eslint-disable-next-line no-duplicate-imports
import type { ForwardedRef } from "react"

import { StyledAside } from "components/layouts/Aside/styles"
import type { AsideProps } from "components/layouts/Aside/types"

export const Aside = forwardRef(
    ({ as }: AsideProps, ref?: ForwardedRef<HTMLDivElement>) => {
        return <StyledAside ref={ref} as={as}></StyledAside>
    }
)
