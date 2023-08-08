/*=============================================== H5 ===============================================*/

import { forwardRef, type ForwardedRef } from "react"

import { StyledH5 } from "components/ui/Text/styles"
import type { TextProps } from "components/ui/Text/types"

export const H5 = forwardRef(
    (
        { as, children, color, maxLines, textAlign, ...rest }: TextProps,
        ref?: ForwardedRef<HTMLHeadingElement>
    ) => {
        return (
            <StyledH5
                ref={ref}
                as={as}
                $color={color}
                $maxLines={maxLines}
                $textAlign={textAlign}
                {...rest}
            >
                {children}
            </StyledH5>
        )
    }
)
