/*=============================================== H6 ===============================================*/

import { forwardRef, type ForwardedRef } from "react"

import { StyledH6 } from "components/ui/Text/styles"
import type { TextProps } from "components/ui/Text/types"

export const H6 = forwardRef(
    (
        { as, children, color, maxLines, textAlign, ...rest }: TextProps,
        ref?: ForwardedRef<HTMLHeadingElement>
    ) => {
        return (
            <StyledH6
                ref={ref}
                as={as}
                $color={color}
                $maxLines={maxLines}
                $textAlign={textAlign}
                {...rest}
            >
                {children}
            </StyledH6>
        )
    }
)
