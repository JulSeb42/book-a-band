/*=============================================== H4 ===============================================*/

import { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { StyledH4 } from "components/ui/Text/styles"
import type { TextProps } from "components/ui/Text/types"

export const H4 = forwardRef(
    (
        { as, children, color, maxLines, textAlign, ...rest }: TextProps,
        ref?: ForwardedRef<HTMLHeadingElement>
    ) => {
        return (
            <StyledH4
                ref={ref}
                as={as}
                $color={color}
                $maxLines={maxLines}
                $textAlign={textAlign}
                {...rest}
            >
                {children}
            </StyledH4>
        )
    }
)
