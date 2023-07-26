/*=============================================== H3 ===============================================*/

import { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { StyledH3 } from "components/ui/Text/styles"
import type { TextProps } from "components/ui/Text/types"

export const H3 = forwardRef(
    (
        { as, children, color, maxLines, ...rest }: TextProps,
        ref?: ForwardedRef<HTMLHeadingElement>
    ) => {
        return (
            <StyledH3
                ref={ref}
                as={as}
                $color={color}
                $maxLines={maxLines}
                {...rest}
            >
                {children}
            </StyledH3>
        )
    }
)
