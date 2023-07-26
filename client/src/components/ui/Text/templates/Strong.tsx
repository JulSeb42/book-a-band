/*=============================================== Strong ===============================================*/

import { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { StyledStrong } from "components/ui/Text/styles"
import type { TextProps } from "components/ui/Text/types"

export const Strong = forwardRef(
    (
        { as, children, color, maxLines, ...rest }: TextProps,
        ref?: ForwardedRef<HTMLParagraphElement>
    ) => {
        return (
            <StyledStrong
                ref={ref}
                as={as}
                $color={color}
                $maxLines={maxLines}
                {...rest}
            >
                {children}
            </StyledStrong>
        )
    }
)
