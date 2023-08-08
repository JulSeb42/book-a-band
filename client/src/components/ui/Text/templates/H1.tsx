/*=============================================== H1 ===============================================*/

import { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { StyledH1 } from "components/ui/Text/styles"
import type { TextProps } from "components/ui/Text/types"

export const H1 = forwardRef(
    (
        { as, children, color, maxLines, textAlign, ...rest }: TextProps,
        ref?: ForwardedRef<HTMLHeadingElement>
    ) => {
        return (
            <StyledH1
                ref={ref}
                as={as}
                $color={color}
                $maxLines={maxLines}
                $textAlign={textAlign}
                {...rest}
            >
                {children}
            </StyledH1>
        )
    }
)
