/*=============================================== Em ===============================================*/

import { forwardRef } from "react"
import { ForwardedRef } from "react"

import { StyledEm } from "components/ui/Text/styles"
import type { TextProps } from "components/ui/Text/types"

export const Em = forwardRef(
    ({ children }: TextProps, ref?: ForwardedRef<HTMLParagraphElement>) => {
        return <StyledEm ref={ref}>{children}</StyledEm>
    }
)
