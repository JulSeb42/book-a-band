/*=============================================== Image component ===============================================*/

import { forwardRef, Suspense, lazy, type ForwardedRef } from "react"

import { Skeleton } from "components"

import type { ImageProps } from "components/media/Image/types"

const StyledImage = lazy(() => import("components/media/Image/styles"))

export const Image = forwardRef(
    (
        { src, width, height, fit, borderRadius, ...rest }: ImageProps,
        ref?: ForwardedRef<HTMLImageElement>
    ) => {
        return (
            <Suspense
                fallback={
                    <Skeleton
                        width={width}
                        height={height}
                        borderRadius={borderRadius}
                        isShining
                    />
                }
            >
                <StyledImage
                    ref={ref}
                    src={src}
                    $fit={fit}
                    $borderRadius={borderRadius}
                    $height={height}
                    $width={width}
                    {...rest}
                />
            </Suspense>
        )
    }
)
