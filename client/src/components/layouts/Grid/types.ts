/*=============================================== Grid types ===============================================*/

import type { ElementType, ReactNode, HTMLAttributes } from "react"
import type {
    GridAlignContentTypes,
    GridAlignItemsTypes,
    GridJustifyContentTypes,
    GridJustifyItemsTypes,
    SpacersTypes,
} from "components/types"

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType
    children?: ReactNode | ReactNode[]
    inline?: boolean
    col?: number | string
    gap?: SpacersTypes
    columnGap?: SpacersTypes
    rowGap?: SpacersTypes
    justifyItems?: GridJustifyItemsTypes
    alignItems?: GridAlignItemsTypes
    justifyContent?: GridJustifyContentTypes
    alignContent?: GridAlignContentTypes
}
