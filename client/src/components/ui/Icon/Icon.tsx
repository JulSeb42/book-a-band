/*=============================================== Icon component ===============================================*/

import { forwardRef } from "react"
import type { ForwardedRef } from "react"
import type InlineSVG from "react-inlinesvg"

import { StyledIcon } from "components/ui/Icon/styles"
import type { IconProps } from "components/ui/Icon/types"

export const Icon = forwardRef(
    (
        { src, color = "currentColor", size, ...rest }: IconProps,
        ref?: ForwardedRef<InlineSVG>
    ) => {
        return (
            <StyledIcon
                ref={ref}
                src={`/icons/${src}.svg`}
                $color={color}
                $size={size}
                {...rest}
            />
        )
    }
)
