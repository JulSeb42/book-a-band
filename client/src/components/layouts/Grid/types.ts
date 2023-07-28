/*=============================================== Grid types ===============================================*/

import type { ElementType, ReactNode, HTMLAttributes } from "react"
import type {
    GridAlignContentType,
    GridAlignItemsType,
    GridJustifyContentType,
    GridJustifyItemsType,
    SpacersType,
} from "components/types"

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType
    children?: ReactNode | ReactNode[]
    inline?: boolean
    col?: number | string
    gap?: SpacersType
    columnGap?: SpacersType
    rowGap?: SpacersType
    justifyItems?: GridJustifyItemsType
    alignItems?: GridAlignItemsType
    justifyContent?: GridJustifyContentType
    alignContent?: GridAlignContentType
}
