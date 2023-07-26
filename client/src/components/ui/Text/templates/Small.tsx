/*=============================================== Small ===============================================*/

import { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { StyledSmall } from "components/ui/Text/styles"
import type { TextProps } from "components/ui/Text/types"

export const Small = forwardRef(
    (
        { as, children, color, maxLines, ...rest }: TextProps,
        ref?: ForwardedRef<HTMLParagraphElement>
    ) => {
        return (
            <StyledSmall
                ref={ref}
                as={as}
                $color={color}
                $maxLines={maxLines}
                {...rest}
            >
                {children}
            </StyledSmall>
        )
    }
)
