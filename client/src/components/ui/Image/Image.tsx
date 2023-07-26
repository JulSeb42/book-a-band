/*=============================================== Image component ===============================================*/

import { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { StyledImage } from "components/ui/Image/styles"
import type { ImageProps } from "components/ui/Image/types"

export const Image = forwardRef(
    (
        { src, width, height, fit, borderRadius, ...rest }: ImageProps,
        ref?: ForwardedRef<HTMLImageElement>
    ) => {
        return (
            <StyledImage
                ref={ref}
                src={src}
                $fit={fit}
                $borderRadius={borderRadius}
                $height={height}
                $width={width}
                {...rest}
            />
        )
    }
)
