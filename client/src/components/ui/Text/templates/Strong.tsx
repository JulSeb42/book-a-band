/*=============================================== Strong ===============================================*/

import { forwardRef, type ForwardedRef } from "react"

import { StyledStrong } from "components/ui/Text/styles"
import type { TextProps } from "components/ui/Text/types"

export const Strong = forwardRef(
    (
        { as, children, color, maxLines, textAlign, ...rest }: TextProps,
        ref?: ForwardedRef<HTMLParagraphElement>
    ) => {
        return (
            <StyledStrong
                ref={ref}
                as={as}
                $color={color}
                $maxLines={maxLines}
                $textAlign={textAlign}
                {...rest}
            >
                {children}
            </StyledStrong>
        )
    }
)
