/*=============================================== P ===============================================*/

import { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { StyledP } from "components/ui/Text/styles"
import type { TextProps } from "components/ui/Text/types"

export const P = forwardRef(
    (
        { as, children, color, ...rest }: TextProps,
        ref?: ForwardedRef<HTMLParagraphElement>
    ) => {
        return (
            <StyledP ref={ref} as={as} data-color={color} {...rest}>
                {children}
            </StyledP>
        )
    }
)
