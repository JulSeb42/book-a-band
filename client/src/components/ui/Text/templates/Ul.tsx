/*=============================================== Ul ===============================================*/

import { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { StyledUl } from "components/ui/Text/styles"
import type { TextProps } from "components/ui/Text/types"

export const Ul = forwardRef(
    (
        { as, children, color, ...rest }: TextProps,
        ref?: ForwardedRef<HTMLUListElement>
    ) => {
        return (
            <StyledUl ref={ref} as={as} $color={color} {...rest}>
                {children}
            </StyledUl>
        )
    }
)
