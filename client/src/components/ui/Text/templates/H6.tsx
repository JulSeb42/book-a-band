/*=============================================== H6 ===============================================*/

import { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { StyledH6 } from "components/ui/Text/styles"
import type { TextProps } from "components/ui/Text/types"

export const H6 = forwardRef(
    (
        { as, children, color, ...rest }: TextProps,
        ref?: ForwardedRef<HTMLHeadingElement>
    ) => {
        return (
            <StyledH6 ref={ref} as={as} $color={color} {...rest}>
                {children}
            </StyledH6>
        )
    }
)
