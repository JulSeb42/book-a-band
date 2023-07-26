/*=============================================== H2 ===============================================*/

import { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { StyledH2 } from "components/ui/Text/styles"
import type { TextProps } from "components/ui/Text/types"

export const H2 = forwardRef(
    (
        { as, children, color, maxLines, ...rest }: TextProps,
        ref?: ForwardedRef<HTMLHeadingElement>
    ) => {
        return (
            <StyledH2
                ref={ref}
                as={as}
                $color={color}
                $maxLines={maxLines}
                {...rest}
            >
                {children}
            </StyledH2>
        )
    }
)
