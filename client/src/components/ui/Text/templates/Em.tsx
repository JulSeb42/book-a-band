/*=============================================== Em ===============================================*/

import { forwardRef, type ForwardedRef } from "react"

import { StyledEm } from "components/ui/Text/styles"
import type { TextProps } from "components/ui/Text/types"

export const Em = forwardRef(
    (
        { as, children, color, maxLines, textAlign, ...rest }: TextProps,
        ref?: ForwardedRef<HTMLParagraphElement>
    ) => {
        return (
            <StyledEm
                ref={ref}
                as={as}
                $color={color}
                $maxLines={maxLines}
                $textAlign={textAlign}
                {...rest}
            >
                {children}
            </StyledEm>
        )
    }
)
