/*=============================================== Skeleton types ===============================================*/

import type {
    ColorsType,
    RadiusesType,
    PaddingType,
    BorderProps,
} from "components/types"
import type { FlexboxProps } from "components/layouts/Flexbox/types"

export interface SkeletonProps {
    width?: string | number
    height?: string | number
    maxWidth?: string | number
    backgroundColor?: ColorsType
    borderRadius?: RadiusesType
    isShining?: boolean
    className?: string
}

export interface SkeletonCardProps extends FlexboxProps {
    border?: BorderProps
    isShining?: boolean
    borderRadius?: RadiusesType
    padding?: PaddingType
}
