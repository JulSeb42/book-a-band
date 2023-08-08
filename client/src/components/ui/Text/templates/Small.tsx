/*=============================================== Small ===============================================*/

import { forwardRef, type ForwardedRef } from "react"

import { StyledSmall } from "components/ui/Text/styles"
import type { TextProps } from "components/ui/Text/types"

export const Small = forwardRef(
    (
        { as, children, color, maxLines, textAlign, ...rest }: TextProps,
        ref?: ForwardedRef<HTMLParagraphElement>
    ) => {
        return (
            <StyledSmall
                ref={ref}
                as={as}
                $color={color}
                $maxLines={maxLines}
                $textAlign={textAlign}
                {...rest}
            >
                {children}
            </StyledSmall>
        )
    }
)
