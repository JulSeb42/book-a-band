/*=============================================== Em ===============================================*/

import { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { StyledEm } from "components/ui/Text/styles"
import type { TextProps } from "components/ui/Text/types"

export const Em = forwardRef(
    (
        { as, children, color, maxLines, ...rest }: TextProps,
        ref?: ForwardedRef<HTMLParagraphElement>
    ) => {
        return (
            <StyledEm
                ref={ref}
                as={as}
                $color={color}
                $maxLines={maxLines}
                {...rest}
            >
                {children}
            </StyledEm>
        )
    }
)
