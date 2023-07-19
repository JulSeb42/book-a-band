/*=============================================== H5 ===============================================*/

import { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { StyledH5 } from "components/ui/Text/styles"
import type { TextProps } from "components/ui/Text/types"

export const H5 = forwardRef(
    (
        { as, children, color, ...rest }: TextProps,
        ref?: ForwardedRef<HTMLHeadingElement>
    ) => {
        return (
            <StyledH5 ref={ref} as={as} data-color={color} {...rest}>
                {children}
            </StyledH5>
        )
    }
)
