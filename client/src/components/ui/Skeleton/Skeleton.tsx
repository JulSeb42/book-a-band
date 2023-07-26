/*=============================================== Skeleton component ===============================================*/

import {
    StyledSkeleton,
    StyledSkeletonCard,
    Shine,
} from "components/ui/Skeleton/styles"
import type {
    SkeletonProps,
    SkeletonCardProps,
} from "components/ui/Skeleton/types"

export const Skeleton = ({
    width = "100%",
    height = 24,
    maxWidth,
    backgroundColor = "gray-ghost",
    borderRadius = "s",
    isShining,
    className,
}: SkeletonProps) => {
    return (
        <StyledSkeleton
            className={className}
            $width={width}
            $height={height}
            $maxWidth={maxWidth}
            $backgroundColor={backgroundColor}
            $borderRadius={borderRadius}
            $isShining={isShining}
        />
    )
}

export const SkeletonCard = ({
    isShining,
    padding,
    children,
    border,
    ...rest
}: SkeletonCardProps) => {
    return (
        <StyledSkeletonCard $padding={padding} $border={border} {...rest}>
            {children}

            {isShining && <Shine />}
        </StyledSkeletonCard>
    )
}
