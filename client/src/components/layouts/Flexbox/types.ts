/*=============================================== Flexbox types ===============================================*/

import type { ReactNode, ElementType, HTMLAttributes } from "react"
import type {
    FlexAlignContentType,
    FlexAlignItemsType,
    FlexDirectionType,
    FlexJustifyContentType,
    FlexJustifyItemsType,
    FlexWrapType,
    SpacersType,
} from "components/types"

export interface FlexboxProps extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType
    children?: ReactNode | ReactNode[]
    inline?: boolean
    flexDirection?: FlexDirectionType
    flexWrap?: FlexWrapType
    justifyContent?: FlexJustifyContentType
    alignItems?: FlexAlignItemsType
    justifyItems?: FlexJustifyItemsType
    alignContent?: FlexAlignContentType
    gap?: SpacersType
    columnGap?: SpacersType
    rowGap?: SpacersType
}
