/*=============================================== Ul ===============================================*/

import { forwardRef, type ForwardedRef } from "react"

import { StyledUl } from "components/ui/Text/styles"
import type { TextProps } from "components/ui/Text/types"

export const Ul = forwardRef(
    (
        { as, children, color, maxLines, textAlign, ...rest }: TextProps,
        ref?: ForwardedRef<HTMLUListElement>
    ) => {
        return (
            <StyledUl
                ref={ref}
                as={as}
                $color={color}
                $maxLines={maxLines}
                $textAlign={textAlign}
                {...rest}
            >
                {children}
            </StyledUl>
        )
    }
)
