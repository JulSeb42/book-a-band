/*=============================================== Skeleton types ===============================================*/

import type {
    ColorsTypes,
    RadiusesTypes,
    PaddingTypes,
    BorderProps,
} from "components/types"
import type { FlexboxProps } from "components/layouts/Flexbox/types"

export interface SkeletonProps {
    width?: string | number
    height?: string | number
    maxWidth?: string | number
    backgroundColor?: ColorsTypes
    borderRadius?: RadiusesTypes
    isShining?: boolean
    className?: string
}

export interface SkeletonCardProps extends FlexboxProps {
    border?: BorderProps
    isShining?: boolean
    borderRadius?: RadiusesTypes
    padding?: PaddingTypes
}
