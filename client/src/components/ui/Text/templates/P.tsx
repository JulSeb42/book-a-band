/*=============================================== P ===============================================*/

import { forwardRef, type ForwardedRef } from "react"

import { StyledP } from "components/ui/Text/styles"
import type { TextProps } from "components/ui/Text/types"

export const P = forwardRef(
    (
        { as, children, color, maxLines, textAlign, ...rest }: TextProps,
        ref?: ForwardedRef<HTMLParagraphElement>
    ) => {
        return (
            <StyledP
                ref={ref}
                as={as}
                $color={color}
                $maxLines={maxLines}
                $textAlign={textAlign}
                {...rest}
            >
                {children}
            </StyledP>
        )
    }
)
